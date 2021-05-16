import React, { Component } from 'react';

class NotFound extends Component {

	render() {
		const { staticContext } = this.props;
		staticContext && (staticContext.NOT_FOUND = true);
		return <div>404, sorry, page not found</div>
	}

}

export default NotFound;
