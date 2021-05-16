import React from 'react';
import Home from './containers/Home';
import Translation from './containers/Translation';
import Login from "./containers/Login";
import App from "./containers/App/index";
import NotFound from "./containers/NotFound";

export default [
    {
    	path: '/',
    	component: App,
    	loadData: App.loadData,
    	routes: [
    		{
    			path: '/',
    			component: Home,
    			exact: true,
    			loadData: Home.loadData,
    			key: 'Home'
    		},
    		{
    			path: '/login',
    			component: Login,
    			exact: true,
    			loadData: Login.loadData,
    			key: 'Login'
    		},
			{
				path: '/translation',
				component: Translation,
				exact: true,
				loadData: Translation.loadData,
				key: 'Translation'
			},
			{
				component: NotFound
			}
    	]
    }
];
