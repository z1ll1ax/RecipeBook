import { FC } from "react";
import './Aside.scss'
import Main from '/RecipeBook/src/assets/images/main.svg'
import Favorite from '/RecipeBook/src/assets/images/favorite.svg'
import Friends from '/RecipeBook/src/assets/images/friends.svg'
import Recipes from '/RecipeBook/src/assets/images/recipes.svg'
import RecipeFeed from '/RecipeBook/src/assets/images/recipefeed.svg'
import Settings from '/RecipeBook/src/assets/images/settings.svg'
import Profile from '/RecipeBook/src/assets/images/profile.svg'


interface AsideProps {
  setActiveMainComponent: (component: string) => void;
}

const Aside: FC<AsideProps> = (
  {
    setActiveMainComponent
  }
) => {
  return (
    <aside className='menu'>
      <nav className='menu-nav'>
        <ul className='menu-list'>
          <li className='menu-item'>
            <a className='menu-item-link'>
              <img className='menu-item-link__image'
                src={Main}
                alt='Главная'></img>
              <p className='menu-item-link__text'>
                Главная
              </p>
            </a>
          </li>
          <li className='menu-item'>
            <a className='menu-item-link'>
              <img className='menu-item-link__image'
                src={RecipeFeed}
                alt='Лента'></img>
              <p className='menu-item-link__text'>
                Лента
              </p>
            </a>
          </li>
          <li className='menu-item'>
            <a className='menu-item-link'>
              <img className='menu-item-link__image'
                src={Favorite}
                alt='Избранное'></img>
              <p className='menu-item-link__text'>
                Избранное
              </p>
            </a>
          </li>
          <li className='menu-item'>
            <a className='menu-item-link'>
              <img className='menu-item-link__image'
                src={Recipes}
                alt='Рецепты'></img>
              <p className='menu-item-link__text'>
                Рецепты
              </p>
            </a>
          </li>
          <li className='menu-item'>
            <a className='menu-item-link'>
              <img className='menu-item-link__image'
                src={Friends}
                alt='Друзья'></img>
              <p className='menu-item-link__text'>
                Друзья
              </p>
            </a>
          </li>
          <li className='menu-item'>
            <a className='menu-item-link'
              onClick={() => setActiveMainComponent('profile')}>
              <img className='menu-item-link__image'
                src={Profile}
                alt='Мой профиль'></img>
              <p className='menu-item-link__text'>
                Мой профиль
              </p>
            </a>
          </li>
          <li className='menu-item'>
            <a className='menu-item-link'>
              <img className='menu-item-link__image'
                src={Settings}
                alt='Настройки'></img>
              <p className='menu-item-link__text'>
                Настройки
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside;





