import React, {useEffect} from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import {getHomeList} from "./store/action";

const Home = (props) => {


	useEffect(() => {
		props.getHomeList();
	}, []);

	return (
		<div>
			<Header />
			<div>This is Dell Lee!</div>
			<button onClick={()=>{alert('click1')}}>
				click
			</button>
		</div>
	)
}


const mapStateToProps  = state => {
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
