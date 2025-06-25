import { useCallback } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import './NewPlace.css';

const NewPlace = () => {
    const titleInputHandler = useCallback((id, value, isValid) => {}, []);

    const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Название"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Введите название места"
                onInput={titleInputHandler} />
            <Input
                id="description"
                element="textarea"
                type="text"
                label="Описание"
                validators={[VALIDATOR_MINLENGTH(10)]}
                errorText="Введите описание места"
                onInput={descriptionInputHandler} />
        </form>
    );
};

export default NewPlace;