import React, { Component } from 'react';

class UserInput extends Component {
	render() {
		return <input type='text' onChange={this.props.handleInputChange}></input>;
	}
}

export default UserInput;
