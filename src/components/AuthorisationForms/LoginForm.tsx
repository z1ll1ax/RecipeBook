import { FC, useState } from 'react';
import axios from 'axios';
import './AuthorisationForms.scss';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  logIn: (userId: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({ logIn }) => {
  const navigate = useNavigate();

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
      const url = `http://26.100.141.142:7070/people/login?login=${formData.login}&password=${formData.password}`;
      const response = await axios.get(url);
      if (response.data) {
        logIn(response.data.id);
      } else {
        console.error('No user found');
      }
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
        <a
          className="form-link"
          onClick={() => {
            navigate(`/register`);
          }}
        >
          Нет аккаунта? Регистрация
        </a>
        <a className="form-link">Забыли пароль?</a>
      </div>
      <button className="form-button" type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
