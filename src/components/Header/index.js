import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const {isLogin, loginHandler, logoutHandler} = props;
    return (
        <div style={{display: "flex"}}>
            <Link to='/'>Home</Link>
            &nbsp;
            {isLogin
                ? <React.Fragment>
                    <div  onClick={logoutHandler}>Logout</div>
                    <Link to='/translation'>Translation</Link>
                </React.Fragment>
                : <div  onClick={loginHandler}>Login</div>}
        </div>
    )
}

export default Header;
