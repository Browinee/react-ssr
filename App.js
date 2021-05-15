import React from 'react';
import Header from './src/components/Header';
import {renderRoutes} from "react-router-config";


const App = (props) => {
    return (
        <div>
            <Header />
             {/*render second layer route*/}
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default App;
