import { FC } from 'react';
import './Aside.scss';
import Profile from '/RecipeBook/src/assets/images/profile.svg';

interface AsideProps {
  setActiveMainComponent: (component: string) => void;
}

const Aside: FC<AsideProps> = ({ setActiveMainComponent }) => {
  return (
    <aside className="menu">
      <nav className="menu-nav">
        <ul className="menu-list">
          <li className="menu-item">
            <a className="menu-item-link">
              <svg className="menu-item-link__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
              <p className="menu-item-link__text">Главная</p>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-item-link">
              <svg className="menu-item-link__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M640-120q-33 0-56.5-23.5T560-200v-160q0-33 23.5-56.5T640-440h160q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H640Zm0-80h160v-160H640v160ZM80-240v-80h360v80H80Zm560-280q-33 0-56.5-23.5T560-600v-160q0-33 23.5-56.5T640-840h160q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H640Zm0-80h160v-160H640v160ZM80-640v-80h360v80H80Zm640 360Zm0-400Z"/>
              </svg>
              <p className="menu-item-link__text">Лента</p>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-item-link">
              <svg className="menu-item-link__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
              </svg>
              <p className="menu-item-link__text">Избранное</p>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-item-link">
              <svg className="menu-item-link__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/>
              </svg>
              <p className="menu-item-link__text">Мои рецепты</p>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-item-link">
              <svg className="menu-item-link__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/>
              </svg>
              <p className="menu-item-link__text">Друзья</p>
            </a>
          </li>
          <li className="menu-item">
            <a
              className="menu-item-link"
              onClick={() => setActiveMainComponent('profile')}
            >
              <svg className="menu-item-link__image"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
              </svg>
              <p className="menu-item-link__text">Мой профиль</p>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-item-link">
              <svg className="menu-item-link__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
              </svg>
              <p className="menu-item-link__text">Настройки</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
