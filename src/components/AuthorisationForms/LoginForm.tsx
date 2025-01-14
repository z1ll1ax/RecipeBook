import { FC, useState } from 'react';
import axios from 'axios';
import './AuthorisationForms.scss';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        'http://26.100.141.142:7070/people',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form-header">Вход</h1>
      <div className="form-field">
        <label className="form-field__label" htmlFor="login">
          Логин
        </label>
        <input
          className="form-field__input"
          type="text"
          id="login"
          name="login"
          autoComplete="off"
          value={formData.login}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label className="form-field__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="form-field__input"
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-links">
        <a className="form-link">Нет аккаунта? Регистрация</a>
        <a className="form-link">Забыли пароль?</a>
      </div>
      <button className="form-button" type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
