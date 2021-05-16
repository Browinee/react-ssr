import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';
import { reducer as translationReducer } from '../containers/Translation/store';
import { reducer as appReducer } from '../containers/App/store';
import clientAxios from '../client/request';
import createInstance from "../server/request";

const reducer = combineReducers({
	home: homeReducer,
	translation: translationReducer,
	app: appReducer,
});

export const getStore = (req) => {
	return createStore(reducer, applyMiddleware(thunk.withExtraArgument(createInstance(req))));
}
export const getClientStore = () => {
	const defaultStore = window.context.state;
	return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}








