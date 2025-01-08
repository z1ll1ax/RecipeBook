import {FC} from "react";

interface AccountEnterProps {

}

const AccountEnter: FC<AccountEnterProps> = () => {
    return (
        <div className='account-enter'>
            <button className="account-enter__button account-enter__light">Войти</button>
            <button className="account-enter__button account-enter__light">Регистрация</button>
        </div>
    )
}

export default AccountEnter;