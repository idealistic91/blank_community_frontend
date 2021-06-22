import { CHANGE_COMMUNITY } from "./community.types";

const INITIAL_STATE = {
    current_community: '',
    community_name: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_COMMUNITY:
            return {
                current_community: action.current_community,
                community_name: action.community_name
            };
        default: return state;
    }
}

export default reducer;