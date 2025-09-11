const express = require("express");

const router = express.Router();

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

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid; // { pid: 'p1' }

    const place = PLACES.find(p => {
        return p.id === placeId;
    });

    if (!place) {
        const error = new Error('Could not find a place for the provided id.');
        error.code = 404;
        throw error;
    }

    res.json({ place }); // => { place } => { place: place }
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;

    const place = PLACES.find(p => {
        return p.creator === userId;
    });

    if (!place) {
        const error = new Error('Could not find a place for the provided user id.');
        error.code = 404;
        return next(error);
    }

    res.json({ place });
});

module.exports = router;


