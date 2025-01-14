import { FC } from 'react';
import './Profile.scss';
import profileImage from '/RecipeBook/src/assets/images/avatar.jpg';

interface ProfileProps {
  name?: string;
  lastName?: string;
  description?: string;
  sex?: string;
  birthDate?: string;
  email?: string;
}

const Profile: FC<ProfileProps> = ({
  name = '-',
  lastName = '',
  description = '',
  sex = '',
  birthDate = '',
  email = ''
}) => {
  const age = 20;
  //TODO: calculate age from birth date
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-avatar">
          <div className="profile-avatar-overflow">
            <img
              className="profile-avatar-image"
              src={profileImage}
              alt={name + ' ' + lastName}
            ></img>
          </div>
        </div>
        <div className="profile-characteristics">
          <div className="profile-name-container">
            <h1 className="profile-name">{name + ' ' + lastName}</h1>
          </div>
          <div className="profile-sex-and-age-container profile-characteristic-container">
            <h3 className="profile-sex-and-age profile-characteristic">
              {sex + ', ' + age + ' лет'}
            </h3>
          </div>
          <div className="profile-birth-container profile-characteristic-container">
            <h3 className="profile-birth profile-characteristic">
              {'Дата рождения: ' + birthDate}
            </h3>
          </div>
          <div className="profile-email-container profile-characteristic-container">
            <a className="profile-email profile-characteristic">
              {'Электронная почта: ' + email}
            </a>
          </div>
        </div>
        <div className="profile-friends">
          <a className="profile-friends-title">Друзья (84)</a>
          <div className="profile-friends-list">
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img
                  className="profile-friend-avatar-image"
                  src={profileImage}
                  alt={name + ' ' + lastName}
                ></img>
              </div>
              <h2 className="profile-friend-name">Павел</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img
                  className="profile-friend-avatar-image"
                  src={profileImage}
                  alt={name + ' ' + lastName}
                ></img>
              </div>
              <h2 className="profile-friend-name">Владислав</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img
                  className="profile-friend-avatar-image"
                  src={profileImage}
                  alt={name + ' ' + lastName}
                ></img>
              </div>
              <h2 className="profile-friend-name">Алексей</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img
                  className="profile-friend-avatar-image"
                  src={profileImage}
                  alt={name + ' ' + lastName}
                ></img>
              </div>
              <h2 className="profile-friend-name">Александра</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img
                  className="profile-friend-avatar-image"
                  src={profileImage}
                  alt={name + ' ' + lastName}
                ></img>
              </div>
              <h2 className="profile-friend-name">Павел</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img
                  className="profile-friend-avatar-image"
                  src={profileImage}
                  alt={name + ' ' + lastName}
                ></img>
              </div>
              <h2 className="profile-friend-name">Владислав</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img
                  className="profile-friend-avatar-image"
                  src={profileImage}
                  alt={name + ' ' + lastName}
                ></img>
              </div>
              <h2 className="profile-friend-name">Алексей</h2>
            </a>
            <a className="profile-friend">
              <div className="profile-friend-avatar-overflow">
                <img
                  className="profile-friend-avatar-image"
                  src={profileImage}
                  alt={name + ' ' + lastName}
                ></img>
              </div>
              <h2 className="profile-friend-name">Александра</h2>
            </a>
          </div>
        </div>
        <div className="profile-description">
          <p className="profile-description-text">{description}</p>
          <div className="profile-description-bot-container">
            <a className="profile-description-bot-container__recipes">
              42 рецепта
            </a>
            <a className="profile-description-bot-container__favorites">
              34 избранных
            </a>
          </div>
        </div>
      </div>
      <div className="profile-recipes"></div>
      {/* <div className="profile-name">
                <img className="profile-name-avatar"
                    src={profileImage}
                    alt='Аватар'></img>
                <div className="profile-name-container">
                    <h1 className="profile-name-container__name profile-name-container-text">
                        {`${name} ${lastName}`}
                    </h1>
                    <h3 className="profile-name-container__sex profile-name-container-text">
                        {sex}
                    </h3>
                    <h3 className="profile-name-container__age profile-name-container-text">
                        {birthDate}
                    </h3>
                    <h3 className="profile-name-container__email profile-name-container-text">
                        {email}
                    </h3>
                </div>
            </div>
            <h3 className="profile-name-container__description profile-name-container-text">
                {description}
            </h3> */}
    </div>
  );
};

export default Profile;
