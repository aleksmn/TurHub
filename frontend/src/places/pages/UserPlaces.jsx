import PlaceList from "../components/PlaceList";

const PLACES = [
    {
        id: 'p1',
        title: 'Крепость Орешек',
        description: 'Крепость на острове Ореховом, напротив города Шлиссельбург',
        image: 'https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=rDosNdLLMPlhDAIQpJ1_8Q&image_size=XL',
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
        image: 'https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=gMOqfIUkpj-y3ShchGhezw&image_size=X5L',
        address: 'остров Котлин, Кронштадт, Санкт-Петербург',
        location: {
            lat: 59.991920,
            lng: 29.775658,
        },
        creator: 'u2'
    },

];

const UserPlaces = () => {
    return (
        <PlaceList items={PLACES} />
    );
}

export default UserPlaces;