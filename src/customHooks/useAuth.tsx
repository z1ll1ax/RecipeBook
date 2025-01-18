import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(() => sessionStorage.getItem('userId'));
  const loggedIn = !!userId;

  const logIn = (userId: string) => {
    sessionStorage.setItem('userId', userId);
    setUserId(userId);
    navigate(`/profile/${userId}`);
  };

  const logOut = () => {
    sessionStorage.removeItem('userId');
    setUserId(null);
    navigate('/login');
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setUserId(sessionStorage.getItem('userId'));
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleStorageChange);
    };
  }, []);

  return { userId, loggedIn, logIn, logOut };
};

export default useAuth;
