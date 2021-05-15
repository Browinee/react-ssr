import { CHANGE_NEWS_LIST } from './constant';
import config from "../../../../config";
const changeList = (list) => ({
    type: CHANGE_NEWS_LIST,
    list
})

export const getHomeList = (isServer = false) => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get(`/api/news.json?secret=${config.secret}`)
            .then((res) => {
                const list = res.data.data;
                dispatch(changeList(list))
            });
    }
}

