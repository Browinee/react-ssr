import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTranslationList} from './store/actions.js';
import {Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";
import withStyle from "../../withStyle";
import styles from './style.css';

class Translation extends Component {
    getList() {
        const {list} = this.props;
        return list.map(item => <div className={styles.item} key={item.id}>{item.title}</div>)
    }

    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getTranslationList();
        }
    }

    render() {
        const {isLogin} = this.props;
        if (isLogin) {
            return (
                <React.Fragment>
                    <Helmet>
                        <title>Translation</title>
                        <meta name="description" content="Translation"></meta>
                    </Helmet>
                    <div className={styles.container}>
                        {this.getList()}
                    </div>
                </React.Fragment>

            )
        } else {
            return <Redirect to="/"/>
        }

    }

}

Translation.loadData = (store) => {
    return store.dispatch(getTranslationList())
}

const mapStateToProps = state => ({
    list: state.translation.translationLists,
    isLogin: state.app.isLogin,
});

const mapDispatchToProps = dispatch => ({
    getTranslationList() {
        dispatch(getTranslationList());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation, styles));
