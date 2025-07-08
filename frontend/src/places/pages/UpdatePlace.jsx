import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

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

const UpdatePlace = () => {
    // получаем id из адресной строки (URL)
    const placeId = useParams().placeId;

    const [isLoading, setIsLoading] = useState(true);

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const identifiedPlace = PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if (identifiedPlace) {
            setFormData(
                {
                    title: {
                        value: identifiedPlace.title,
                        isValid: true
                    },
                    description: {
                        value: identifiedPlace.description,
                        isValid: true
                    },
                    address: {
                        value: identifiedPlace.address,
                        isValid: true
                    }
                },
                true
            );
        }
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>Место не найдено!</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Загрузка...</h2>
            </div>
        );
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Название"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Введите название места"
                onInput={inputHandler}
                value={formState.inputs.title.value}
                valid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Описание"
                validators={[VALIDATOR_MINLENGTH(10)]}
                errorText="Введите описание места"
                onInput={inputHandler}
                value={formState.inputs.description.value}
                valid={formState.inputs.description.isValid}
            />

            <Input
                id="address"
                element="input"
                label="Адрес"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Введите адрес места"
                onInput={inputHandler}
                value={formState.inputs.address.value}
                valid={formState.inputs.address.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                Сохранить изменения
            </Button>
        </form>
    );
};

export default UpdatePlace;
