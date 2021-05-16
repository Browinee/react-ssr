import React from 'react';
import Header from '../../components/Header';
import {renderRoutes} from "react-router-config";
import {useDispatch, useSelector} from "react-redux";
import {getLoginInfo, logout} from "./store/action";
import {Helmet} from "react-helmet";


const App = (props) => {
    const isLogin = useSelector(state => state.app.isLogin);
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(getLoginInfo());
    };
    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <React.Fragment>
            <Helmet>
                <title>App</title>
                <meta name="description" content="This is app page!"></meta>
            </Helmet>
            <div>
                <Header isLogin={isLogin} loginHandler={loginHandler} logoutHandler={logoutHandler}/>
                {/*render second layer route*/}
                {renderRoutes(props.route.routes)}
            </div>
        </React.Fragment>
    )
}

// App.loadData = (store) => {
//     // return store.dispatch(getLoginInfo());
// }

export default App;
