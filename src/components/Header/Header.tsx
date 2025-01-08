import {FC} from "react";
import logoImage from '/RecipeBook/src/assets/images/logo.png';
import AccountLoggedIn from './AccountLoggedIn';
import AccountEnter from './AccountEnter';
import './Header.scss'

interface HeaderProps {
    
}

const Header: FC<HeaderProps> = () => {
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
          <AccountLoggedIn name='Иван Иванов'/>
          <AccountEnter />
        </div>
      </header>
    )
}

export default Header;