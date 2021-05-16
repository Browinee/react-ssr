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
                    <Link to='/translation'>Translation</Link>
                    &nbsp;
                    <div  onClick={logoutHandler}>Logout</div>
                </React.Fragment>
                : <div  onClick={loginHandler}>Login</div>}
        </div>
    )
}

export default Header;
