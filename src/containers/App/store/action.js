import {CHANGE_LOGIN} from './constants';
import config from "../../../../config";

const changeLogin = (value) => ({
    type: CHANGE_LOGIN,
    value
});

export const getLoginInfo = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get(`/api/login.json?secret=${config.secret}`)
            .then((res) => {
                dispatch(changeLogin(res.data.data.login))
            });
    }
}
export const logout = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get(`/api/logout.json?secret=${config.secret}`)
            .then((res) => {
                console.log("res", res);
                dispatch(changeLogin(res.data.data.login))
            });
    }
}

