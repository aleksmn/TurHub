import { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2 className="authentication__header">{isLoginMode ? 'Вход на сайт' : 'Регистрация'}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Имя"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Введите имя"
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="Электронная почта"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Введите электронную почту"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Пароль"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Введите пароль"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Переключить на {isLoginMode ? 'регистрацию' : 'вход'}
      </Button>
    </Card>
  );
};

export default Auth;
