import { FC, useState } from 'react';
import './AuthorisationForms.scss';
import axios from 'axios';
import profileImage from '/RecipeBook/src/assets/images/avatar.jpg';
import { useNavigate } from 'react-router-dom';

const RegisterForm: FC = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }
    try {
      const uploadURL = 'http://26.100.141.142:7070/people/21/avatar';
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(uploadURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    sex: 'M',
    login: '',
    password: '',
    email: '',
    dateOfBirth: '2003-06-07T21:00:00',
    avatarFile: profileImage
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
      //handleUpload();
      const response = await axios.post('http://26.100.141.142:7070/people', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form-header">Регистрация</h1>
      <div className="form-field">
        <label className="form-field__label" htmlFor="first-name">
          Имя
        </label>
        <input
          className="form-field__input"
          type="text"
          id="first-name"
          name="firstName"
          autoComplete="off"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label className="form-field__label" htmlFor="last-name">
          Фамилия
        </label>
        <input
          className="form-field__input"
          type="text"
          id="last-name"
          name="secondName"
          autoComplete="off"
          value={formData.secondName}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label className="form-field__label" htmlFor="avatar">
          Аватар
        </label>
        <input
          className="form-field__input"
          type="file"
          id="avatar"
          name="avatarFile"
          autoComplete="off"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>
      <div className="form-field">
        <label className="form-field__label">Пол</label>
        <div className="form-field__sex-container">
          <div className="form-field__sex-inner-container">
            <input
              type="radio"
              id="male"
              name="sex"
              className="form-field__sex-input"
              value="M"
              checked
              onChange={handleChange}
            />
            <label className="form-field__label" htmlFor="male">
              Мужской
            </label>
          </div>
          <div className="form-field__sex-inner-container">
            <input
              type="radio"
              id="female"
              name="sex"
              className="form-field__sex-input"
              value="F"
              onChange={handleChange}
            />
            <label className="form-field__label" htmlFor="female">
              Женский
            </label>
          </div>
        </div>
      </div>
      <div className="form-field">
        <label className="form-field__label" htmlFor="birth-date">
          Дата рождения
        </label>
        <input
          className="form-field__input"
          type="date"
          id="birth-date"
          name="dateOfBirth"
          autoComplete="off"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
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
        <label className="form-field__label" htmlFor="email">
          Email
        </label>
        <input
          className="form-field__input"
          type="text"
          id="email"
          name="email"
          autoComplete="off"
          value={formData.email}
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
        <a className="form-link" onClick={() => {navigate(`/login`)}}>Уже есть аккаунт? Войти</a>
      </div>
      <button className="form-button" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
