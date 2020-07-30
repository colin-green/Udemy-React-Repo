import React, { Component } from 'react';

class UserOutput extends Component {
	render() {
		return (
			<div>
				<p>Username: {this.props.username}</p>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default UserOutput;
