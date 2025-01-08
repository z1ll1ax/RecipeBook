import { FC } from "react";
import './Profile.scss'
import profileImage from '/RecipeBook/src/assets/images/avatar.svg'

interface ProfileProps {
    name?: string,
    lastName?: string,
    description?: string,
    sex?: string,
    birthDate?: string,
    email?: string,
}

const Profile: FC<ProfileProps> = (
    {
        name,
        lastName,
        description,
        sex,
        birthDate,
        email,
    }
) => {
    //TODO: calculate age from birth date
    return (
        <div className="profile">
            <div className="profile-name">
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
            </h3>
        </div>
    )
}

export default Profile;





