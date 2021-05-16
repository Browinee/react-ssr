import { CHANGE_LOGIN } from './constants';

const defaultState = {
  isLogin: false,
};
export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LOGIN: {
      return Object.assign({}, state, {isLogin: action.value})
    }
    default:
      return state;
  }
}
