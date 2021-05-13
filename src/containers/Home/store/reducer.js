import {CHANGE_NEWS_LIST} from "./constant";

const defaultState = {
    newsList: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_NEWS_LIST:
            const a =  Object.assign({}, state, {newsList: action.list})
            return a
        default:
            return state;
    }
}
