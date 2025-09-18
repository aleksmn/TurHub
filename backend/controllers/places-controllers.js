import { v4 as uuid } from 'uuid';

import HttpError from '../models/http-error.js';

const PLACES = [
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

export const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid; // { pid: 'p1' }

  const place = PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find a place for the provided id.', 404);
  }

  res.json({ place }); // => { place } => { place: place }
};


export const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError('Could not find a place for the provided user id.', 404)
    );
  }

  res.json({ place });
};

export const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  // const title = req.body.title;
  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator
  };

  PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};


export const updatePlace = (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = { ...PLACES.find(p => p.id === placeId) };
  const placeIndex = PLACES.findIndex(p => p.id === placeId);
  updatedPlace.title = title;
  updatedPlace.description = description;

  PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

export const deletePlace = (req, res, next) => { };
