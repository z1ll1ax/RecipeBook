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
        <aside className='menu'>
          <section className='menu__section'>
            Главная
          </section>
          <section className='menu__section'>
            Мои рецепты
          </section>
        </aside>
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
