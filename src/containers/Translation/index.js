import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTranslationList} from './store/actions.js';
import {Redirect} from "react-router-dom";

class Translation extends Component {
    getList() {
        const {list} = this.props;
        console.log("List87", list)
        return list.map(item => <div key={item.id}>{item.title}</div>)
    }

    render() {
        const {isLogin} = this.props;
        console.log("isLogin", isLogin);
        if(isLogin) {
            return (
                <div>
                    {this.getList()}
                </div>
            )
        } else {
            return <Redirect to="/" />
        }

    }

    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getTranslationList();
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

export default connect(mapStateToProps, mapDispatchToProps)(Translation);
