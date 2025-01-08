import './Global.scss';
import RegisterForm from './components/AuthorisationForms/RegisterForm';
import LoginForm from './components/AuthorisationForms/LoginForm';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <div className='main-overflow'>
          <Aside/>
          <section className="main-catalog">
            <LoginForm/>
            <RegisterForm/>
          </section>
        </div>
        <Catalog/>
      </main>
      <Footer/>
    </>
  )
}

export default App
