import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import './NewPlace.css';

const NewPlace = () => {
    return (
        <form className="place-form">
            <Input
                element="input"
                type="text"
                label="Название"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Введите название места" />
        </form>
    );
};

export default NewPlace;