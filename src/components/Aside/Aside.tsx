import {FC} from "react";
import './Aside.scss'
import Main from '/RecipeBook/src/assets/images/main.svg'
import Favorite from '/RecipeBook/src/assets/images/favorite.svg'
import Friends from '/RecipeBook/src/assets/images/friends.svg'
import Recipes from '/RecipeBook/src/assets/images/recipes.svg'

interface AsideProps {
    
}

const Aside: FC<AsideProps> = () => {
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
                        src={ Favorite }
                        alt='Избранное'></img>
                    <p className='menu-item-link__text'>
                    Избранное
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
                <a className='menu-item-link'>
                    <img className='menu-item-link__image'
                        src={Recipes}
                        alt='Рецепты'></img>
                    <p className='menu-item-link__text'>
                    Рецепты
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
    )
}

export default Aside;





