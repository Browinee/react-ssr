import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import {getHomeList} from "./store/action";

const Home = (props) => {
	const getList = () => {
		const { list } = props;
		return list.map(item => <div key={item.id}>{item.title}</div>)
	}

	useEffect(() => {
		props.list.length === 0 && props.getHomeList();
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>Home!!</title>
				<meta name="description" content="justin"></meta>
			</Helmet>
			<div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
