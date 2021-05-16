import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import {getHomeList} from "./store/action";
import styles from "./style.css";
import withStyle from "../../withStyle";

const Home = (props) => {
	const getList = () => {
		const { list } = props;
		return (list || []).map(item => <div className={styles.item} key={item.id}>{item.title}</div>)
	}

	useEffect(() => {
		props.list && props.list.length === 0 && props.getHomeList();
	}, []);
	console.log("Styles", styles);
	return (
		<React.Fragment>
			<Helmet>
				<title>Home!!</title>
				<meta name="description" content="justin"></meta>
			</Helmet>
			<div className={styles.container}>
				{getList()}
				<button onClick={()=>{alert('click')}}>
					click
				</button>
			</div>
		</React.Fragment>
	)
}

Home.loadData = (store) => {
  // Query data before server renders this component.
	return store.dispatch(getHomeList())
};
const mapStateToProps  = state => {
	console.log("state", state);
	return {
     list: state.home.newsList,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getHomeList: () => dispatch(getHomeList()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles));
