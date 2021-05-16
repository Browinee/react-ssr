import React from 'react';
import {Link} from 'react-router-dom';
import styles from './style.css';
import withStyle from "../../withStyle";
const Header = (props) => {
    const {isLogin, loginHandler, logoutHandler} = props;
    console.log('test00000', styles._getCss && (styles._getContent()));
    return (
        <div className={styles.container}>
            <Link to='/' className={styles.item}>Home</Link>
            &nbsp;
            {isLogin
                ? <React.Fragment>
                    <Link to='/translation' className={styles.item}>Translation</Link>
                    &nbsp;
                    <div  onClick={logoutHandler} className={styles.item}>Logout</div>
                </React.Fragment>
                : <div  onClick={loginHandler} className={styles.item}>Login</div>}
        </div>
    )
}

export default withStyle(Header, styles);
