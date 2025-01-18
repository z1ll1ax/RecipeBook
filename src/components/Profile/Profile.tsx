import { FC, useState, useEffect } from 'react';
import './Profile.scss';
import axios from 'axios';
import profileImage from '/RecipeBook/src/assets/images/avatar.jpg';
import { useParams } from 'react-router-dom';
import useAuth from '/RecipeBook/src/customHooks/useAuth';

const Profile: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { userId: currentUserId } = useAuth();
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const userIdToFetch = id || currentUserId;

  const getAge = (birthDate: string): string => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    if (age % 10 === 1 && age !== 11) {
      return `${age} год`;
    } else if ((age % 10 > 1 && age % 10 < 5 && age > 20) || age < 11) {
      return `${age} года`;
    } else {
      return `${age} лет`;
    }
  };
  const getSex = (sex: string): string => {
    if (sex === 'F') return 'Женщина';
    else if (sex === 'M') return 'Мужчина';
    return 'Не указан';
  };
  const getBirthDate = (birthDate: string): string => {
    const day = parseInt(birthDate.slice(8, 10)) + 1;
    const month = birthDate.slice(5, 7);
    const year = birthDate.slice(0, 4);
    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    const fetchProfileData = async (idToFetch: string | null) => {
      if (!idToFetch) {
        console.error('ID пользователя отсутствует');
        return;
      }
      try {
        setIsLoading(true);

        const url = `http://26.100.141.142:7070/people/${idToFetch}`;
        const response = await axios.get(url);
        setProfileData(response.data);
        
        const urlFriends = `http://26.100.141.142:7070/friendship/${idToFetch}`;
        const responseFriends = await axios.get(urlFriends);

        const urlAvatar = `http://26.100.141.142:7070/people/${idToFetch}/avatar`;
        const responseAvatar = await axios.get(urlAvatar, {
          responseType: 'blob',
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (responseAvatar.data) {
          let avatarReceived = URL.createObjectURL(responseAvatar.data);
          setProfileData((prevData: any) => ({
            ...prevData,
            avatar: avatarReceived
          }));
        }
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          console.warn('Аватар не найден, используется изображение по умолчанию.');
          setProfileData((prevData: any) => ({
            ...prevData,
            avatar: null, // Устанавливаем null, если аватара нет
          }));
        } else {
          console.error('Ошибка загрузки аватара:', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (userIdToFetch) fetchProfileData(userIdToFetch);
  }, [userIdToFetch]);

  if (!userIdToFetch) {
    return <p>ID пользователя отсутствует. Пожалуйста, войдите снова.</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!profileData) {
    return <p>Ошибка загрузки данных профиля.</p>;
  }

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-avatar">
          <div className="profile-avatar-overflow">
            <img
              className="profile-avatar-image"
              src={profileData.avatar || profileImage}
              alt={profileData.firstName + ' ' + profileData.secondName}
            ></img>
          </div>
        </div>
        <div className="profile-characteristics">
          <div className="profile-name-container">
            <h1 className="profile-name">{profileData.firstName + ' ' + profileData.secondName}</h1>
          </div>
          <div className="profile-sex-and-age-container profile-characteristic-container">
            <h3 className="profile-sex-and-age profile-characteristic">
              {getSex(profileData.sex) + ', ' + getAge(profileData.dateOfBirth)}
            </h3>
          </div>
          <div className="profile-birth-container profile-characteristic-container">
            <h3 className="profile-birth profile-characteristic">
              {'Дата рождения: ' + getBirthDate(profileData.dateOfBirth)}
            </h3>
          </div>
          <div className="profile-email-container profile-characteristic-container">
            <a
              className="profile-email profile-characteristic"
              href={`mailto:${profileData.email}`}
            >
              {'Электронная почта: ' + profileData.email}
            </a>
          </div>
        </div>
        <div className="profile-friends">
          <a className="profile-friends-title">Друзья (84)</a>
          <div className="profile-friends-list">
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img className="profile-friend-avatar-image" src={profileImage} alt={''}></img>
              </div>
              <h2 className="profile-friend-name">Павел</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img className="profile-friend-avatar-image" src={profileImage} alt={''}></img>
              </div>
              <h2 className="profile-friend-name">Владислав</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img className="profile-friend-avatar-image" src={profileImage} alt={''}></img>
              </div>
              <h2 className="profile-friend-name">Алексей</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img className="profile-friend-avatar-image" src={profileImage} alt={''}></img>
              </div>
              <h2 className="profile-friend-name">Александра</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img className="profile-friend-avatar-image" src={profileImage} alt={''}></img>
              </div>
              <h2 className="profile-friend-name">Павел</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img className="profile-friend-avatar-image" src={profileImage} alt={''}></img>
              </div>
              <h2 className="profile-friend-name">Владислав</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img className="profile-friend-avatar-image" src={profileImage} alt={''}></img>
              </div>
              <h2 className="profile-friend-name">Алексей</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img className="profile-friend-avatar-image" src={profileImage} alt={''}></img>
              </div>
              <h2 className="profile-friend-name">Александра</h2>
            </a>
          </div>
        </div>
        <div className="profile-description">
          <p className="profile-description-text">{profileData.description}</p>
          <div className="profile-description-bot-container">
            <a className="profile-description-bot-container__recipes">42 рецепта</a>
            <a className="profile-description-bot-container__favorites">34 избранных</a>
          </div>
        </div>
      </div>
      <div className="profile-recipes"></div>
    </div>
  );
};

const Loading: FC = () => { 
  return (
    <h1>LOADING</h1>
  )
}

export default Profile;