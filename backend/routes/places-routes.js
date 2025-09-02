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
            lng:  31.039322,
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

router.get("/:pid", (req, res, next) => {
    const placeId = req.params.pid; 
    const place = PLACES.find(p => p.id === placeId);
    if (!place){
        return res.status(404).json({message:"Place not found"})
    }
    console.log("GET request in places by id")
    res.json(place);
})

module.exports = router;



