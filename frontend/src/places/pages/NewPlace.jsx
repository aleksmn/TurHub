import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';


const NewPlace = () => {
    const [formState, inputHandler] = useForm(  
        {
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
       false
    );


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