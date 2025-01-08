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
          <input className='header-input'
                placeholder='Поиск...'
                type='text'>
          </input>
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