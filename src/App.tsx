import './Global.scss';
import RegisterForm from './components/AuthorisationForms/RegisterForm';
import LoginForm from './components/AuthorisationForms/LoginForm';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import Profile from './components/Profile/Profile';
import { useState } from 'react';

function App() {
  const [activeMainComponent, setActiveMainComponent] = useState<string>('login');
  const renderComponent = () => {
    switch (activeMainComponent) {
      case 'register':
        return <RegisterForm />;
      case 'profile':
        return <Profile
          name="Иван"
          lastName="Колядич"
          description="Описание профиля длинный-длинный-длинный текст много букв большое содержание немалый смысл, широкий взгляд в будущее"
          birthDate="20 лет, 27.04.2004"
          sex="Мужчина"
          email="alex-kachok-34-pacan@mail.ru" />;
      case 'login':
      default:
        return <LoginForm />;
    }
  }
  return (
    <>
      <Header setActiveMainComponent={setActiveMainComponent} />
      <main className='main'>
        <div className='main-overflow'>
          <Aside setActiveMainComponent={setActiveMainComponent} />
          <section className="main-container">
            {renderComponent()}
          </section>
        </div>
        <Catalog />
      </main>
      <Footer />
    </>
  )
}

export default App
