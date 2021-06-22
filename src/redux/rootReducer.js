import { combineReducers } from 'redux';

import loginReducer from './Login/login.reducer';
import communityReducer from './Community/community.reducer';

const rootReducer = combineReducers({

    login: loginReducer,
    community: communityReducer

});

export default rootReducer;