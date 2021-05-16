import { CHANGE_TRANSLATION_LIST } from './constant';

const defaultState = {
	translationLists: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_TRANSLATION_LIST:
			const a =  Object.assign({}, state, {translationLists: action.list})
			return a
		default:
			return state;
	}
}
