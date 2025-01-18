import './Global.scss';
import useAuth from './customHooks/useAuth';
import RegisterForm from './components/AuthorisationForms/RegisterForm';
import LoginForm from './components/AuthorisationForms/LoginForm';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import Profile from './components/Profile/Profile';
import { UserProvider } from './customHooks/UserContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//TODO: on server fix birthDate
//TODO: friends and their list
//TODO: loading screen and no user screen
//TODO: failed login
//TODO: paths with ../../ instead of RecipeBook/...
//TODO: registration fix (avatar?)

function App() {
  const { userId, loggedIn, logIn, logOut } = useAuth();

  return (
    <UserProvider>
      <Header userId={userId} loggedIn={loggedIn} logOut={logOut} />
      <main className="main">
        <div className="main-overflow">
          <Aside userId={userId} />
          <section className="main-container">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginForm logIn={logIn} />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path={`profile/:id`} element={<Profile />} />
            </Routes>
          </section>
        </div>
        <Catalog />
      </main>
      <Footer />
    </UserProvider>
  );
}

export default App;
