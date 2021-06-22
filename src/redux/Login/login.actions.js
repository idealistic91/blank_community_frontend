import { LOGIN, LOGOUT } from './login.types';


export const logIn = (username, auth_token) => {

    return {
        type: LOGIN,
        username: username,
        auth_token: auth_token
    };

};

export const logOut = () => {

    return {
       type: LOGOUT
    };

};