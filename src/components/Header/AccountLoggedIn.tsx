import { FC } from 'react';
import accountEmptyImage from '/RecipeBook/src/assets/images/account_empty_image.svg';

interface AccountProps {
  name?: string;
}

const AccountLoggedIn: FC<AccountProps> = ({ name }) => {
  return (
    <div className="account">
      <img className="account__avatar" src={accountEmptyImage}></img>
      <div className="account-settings">
        <h3 className="account-settings__name">{name}</h3>
        <a className="account-settings__quit">Выйти</a>
      </div>
    </div>
  );
};

export default AccountLoggedIn;
