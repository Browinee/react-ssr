import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../Routes';
import {getClientStore } from "../store";
import {renderRoutes} from "react-router-config";


const App = () => {
    return (
        <Provider store={getClientStore()}>
            <BrowserRouter>
                {renderRoutes(Routes)}
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App/>, document.getElementById('root'))
