import { LOGIN, LOGOUT } from './login.types';


const INITIAL_STATE = {
    authenticated: false,
    username: '',
    auth_token: ''
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case LOGIN:
           return {
            authenticated: true,
            username: action.username,
            auth_token: action.auth_token
           };

        case LOGOUT:

           return {
            authenticated: false,
            username: '',
            auth_token: ''
           };

         default: return state;

    }

};

export default reducer;