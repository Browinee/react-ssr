import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';
// import { reducer as translationReducer } from '../containers/Translation/store';
// import headerReducer from '../components/Header/store/reducer';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers({
	home: homeReducer,
	// header: headerReducer,
	// translation: translationReducer
});

export const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}
export const getClientStore = () => {
	const defaultStore = window.context.state;
	return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}








