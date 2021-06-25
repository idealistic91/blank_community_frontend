import { SET_LOADING } from "./app.types";

export const setLoading = (onOff) => {
    return {
        type: SET_LOADING,
        loading: onOff
    };

}