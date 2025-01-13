import {FC} from "react";
import logoImage from '/RecipeBook/src/assets/images/logo.png';
import AccountLoggedIn from './AccountLoggedIn';
import './Header.scss'

interface HeaderProps {
  setActiveMainComponent: (component: string) => void;
}

const Header: FC<HeaderProps> = (
  {
    setActiveMainComponent
  }
) => {
    return (
        <header className='header'>
        <div className='header-overflow'>
          <a className='header-logo'>
            <img className='header-logo__image'
                  src={logoImage}
                  alt='Logo'></img>
            <h1 className='header-logo__header'>RecipeBook</h1>
          </a>
          <div className="header-input-container">
            <input className='header-input-container__input'
                placeholder='Поиск...'
                type='text'>
            </input>
            <button className="header-input-clear-button">
              <svg className="header-input-clear-button__clear-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>
            <button className="header-input-button">
              <svg className="header-input-button__search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
              </svg>
            </button>
          </div>
          {/* <AccountLoggedIn name='Иван Иванов'/> */}
          <div className='account-enter'>
            <button className="account-enter__button account-enter__light"
                    onClick={() => setActiveMainComponent('login')}>
            Войти</button>
            <button className="account-enter__button account-enter__light"
                    onClick={() => setActiveMainComponent('register')}>
            Регистрация</button>
          </div>
        </div>
      </header>
    )
}

export default Header;