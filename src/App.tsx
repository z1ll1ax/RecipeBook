import './App.scss';
import logoImage from '../src/assets/images/logo.png';
import accountEmotyImage from '../src/assets/images/account_empty_image.svg';

function App() {
  return (
    <>
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
          <a className='account'>
            <img className='account__avatar' src={accountEmotyImage}></img>
            <div className='account-settings'>
              <h3 className='account-settings__name'>Иван Иванов</h3>
              <a className='account-settings__quit'>Выйти</a>
            </div>
          </a>
        </div>
      </header>
      <main className='main'>
        <div className='main-overflow'>
          <aside className='menu'>
            <nav className='menu-nav'>
              <ul className='menu-list'>
                <li className='menu-item'>
                  <a className='menu-item__link'>
                    Главная
                  </a>
                </li>
                <li className='menu-item'>
                  <a className='menu-item__link'>
                    Мои рецепты
                  </a>
                </li>
                <li className='menu-item'>
                  <a className='menu-item__link'>
                    Избранное
                  </a>
                </li>
                <li className='menu-item'>
                  <a className='menu-item__link'>
                    Друзья
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <section className="main-catalog">
          <form className='form'
                action="/my-handling-form-page"
                method="post">
            <h1 className='form-header'>Регистрация</h1>
            <div className='form-field'>
              <label className='form-field__label'
                    htmlFor="first-name">Имя</label>
              <input className='form-field__input'
                    type="text"
                    id="first-name"
                    name="user_login"/>
            </div>
            <div className='form-field'>
              <label className='form-field__label'
                    htmlFor="last-name">Фамилия</label>
              <input className='form-field__input'
                    type="text"
                    id="last-name"
                    name="user_login"/>
            </div>
            <div className='form-field'>
              <label className='form-field__label'
                    htmlFor="login">Логин</label>
              <input className='form-field__input'
                    type="text"
                    id="login"
                    name="user_login"/>
            </div>
            <div className='form-field'>
              <label className='form-field__label'
                    htmlFor="password">Пароль</label>
              <input className='form-field__input'
                    type="password"
                    id="password"
                    name="user_password"></input>
            </div>
            <div className='form-links'>
              <a className='form-link'>
                Уже есть аккаунт? Войти
              </a>
              <a className='form-link'>
                Забыли пароль?
              </a>
            </div>
            <button className='form-button'
                    type="submit">
              Зарегистрироваться
            </button>
          </form>
          </section>
        </div>
        
        <div className='catalog'>
          <article className='catalog-item'>

          </article>
        </div>
      </main>
      <footer className='footer'>

      </footer>
    </>
  )
}

export default App
