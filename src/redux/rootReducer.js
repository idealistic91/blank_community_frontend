import { combineReducers } from 'redux';

import loginReducer from './Login/login.reducer';
import communityReducer from './Community/community.reducer';
import appReducer from './App/app.reducer';

const rootReducer = combineReducers({

    login: loginReducer,
    community: communityReducer,
    app: appReducer

});

export default rootReducer;