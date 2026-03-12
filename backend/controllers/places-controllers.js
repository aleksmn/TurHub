import { v4 as uuid } from 'uuid';
import { validationResult } from 'express-validator';

import HttpError from '../models/http-error.js';

import Place from '../models/place.js';

let PLACES = [
    {
        id: 'p1',
        title: 'Крепость Орешек',
        description: 'Крепость на острове Ореховом, напротив города Шлиссельбург',
        image: 'oreshek.jpg',
        address: 'остров Ореховый, Шлиссельбург, Ленинградская область',
        location: {
            lat: 59.953919,
            lng: 31.039322,
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Кронштадт',
        description: 'Город-порт в России, расположенный на острове Котлин',
        image: 'kronshtadt.jpg',
        address: 'остров Котлин, Кронштадт, Санкт-Петербург',
        location: {
            lat: 59.991920,
            lng: 29.775658,
        },
        creator: 'u2'
    },

];

export const getPlaceById = async (req, res, next) => {
    const placeId = req.params.pid; // { pid: 'p1' }

    let place;
    try {
        place = await Place.findById(placeId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find a place.',
            500
        );
        return next(error);
    }

    if (!place) {
        const error = new HttpError(
            'Could not find a place for the provided id.',
            404
        );
        return next(error);
    }

    res.json({ place: place.toObject({ getters: true }) });  // => { place } => { place: place }
};


export const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.uid;

    const place = PLACES.filter(p => {
        return p.creator === userId;
    });

    if (!place) {
        return next(
            new HttpError('Could not find a place for the provided user id.', 404)
        );
    }

    res.json({ place });
};

export const createPlace = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // console.log(errors);
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }
    const { title, description, location, address, creator } = req.body;
    // const title = req.body.title;
    const createdPlace = new Place({
        title,
        description,
        address,
        location,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg',
        creator
    });

    try {
        await createdPlace.save();
    } catch (err) {
        const error = new HttpError(
            'Creating place failed, please try again.',
            500
        );
        console.log(err);
        return next(error);
    }

    res.status(201).json({ place: createdPlace });
};


export const updatePlace = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }

    const { title, description } = req.body;
    const placeId = req.params.pid;

    let place;
    try {
        place = await Place.findById(placeId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update place.',
            500
        );
        return next(error);
    }

    place.title = title;
    place.description = description;

    try {
        await place.save();
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not update place.',
            500
        );
        return next(error);
    }

    res.status(200).json({ place: place.toObject({ getters: true }) });
};

export const deletePlace = async (req, res, next) => {
    const placeId = req.params.pid;

    let place;
    try {
        place = await Place.findById(placeId);
    } catch (err) {
        const error = new HttpError(
            'Something went wrong, could not find place.',
            500
        );
        return next(error);
    }

    try {
        await Place.findByIdAndDelete(placeId);
    } catch (err) {
        console.log(err);
        const error = new HttpError(
            'Something went wrong, could not delete place.',
            500
        );
        return next(error);
    }

    res.status(200).json({ message: 'Deleted place.' });
};