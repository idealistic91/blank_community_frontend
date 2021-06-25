import { SET_LOADING } from "./app.types";

const INITIAL_STATE = {
    loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                loading: action.loading
            };
        default: return state;
    }
}

export default reducer;