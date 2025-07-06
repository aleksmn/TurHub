import { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import './NewPlace.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send to backend
    };

    return (

        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Название"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Введите название места"
                onInput={inputHandler} />
            <Input
                id="description"
                element="textarea"
                label="Описание"
                validators={[VALIDATOR_MINLENGTH(10)]}
                errorText="Введите описание места"
                onInput={inputHandler} />

            <Input
                id="address"
                element="input"
                label="Адрес"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Введите адрес места"
                onInput={inputHandler}
            />


            <Button type="submit" disabled={!formState.isValid}>
                Добавить
            </Button>
        </form>
    );
};

export default NewPlace;