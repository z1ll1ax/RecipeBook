import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';
import avatar from '../assets/images/avatar.jpg';

interface UserProfile {
  avatar: string;
  firstName: string;
  lastName: string;
}

interface UserContextData {
  profile: UserProfile | null;
  isLoading: boolean;
  fetchUserProfile: () => void;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

// Хук для обращения к контексту
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser должен быть использован внутри UserProvider');
  }
  return context;
};

// UserProvider отвечает за получение данных и предоставление их через контекст
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { userId } = useAuth(); // Получаем ID текущего пользователя из useAuth

  // Функция для загрузки профиля
  const fetchUserProfile = async () => {
    if (!userId) return;
    try {
      setIsLoading(true);
      const response = await axios.get(`http://26.100.141.142:7070/people/${userId}`);
      const profileData = response.data;

      // Получаем аватар
      try {
        const avatarResponse = await axios.get(
          `http://26.100.141.142:7070/people/${userId}/avatar`,
          {
            responseType: 'blob'
          }
        );
        const avatarUrl = URL.createObjectURL(avatarResponse.data);
        setProfile({
          avatar: avatarUrl,
          firstName: profileData.firstName,
          lastName: profileData.secondName
        });
      } catch {
        // Если аватар отсутствует, используем заглушку
        setProfile({
          firstName: profileData.firstName,
          lastName: profileData.secondName,
          avatar: avatar // Путь к заглушке
        });
      }
    } catch (error) {
      console.error('Ошибка загрузки профиля', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile(); // Загружаем данные пользователя при загрузке компонента
  }, [userId]);

  return (
    <UserContext.Provider value={{ profile, isLoading, fetchUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};
