import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

class App extends Component {
	state = {
		username: 'Colbol',
	};

	handleInputChange = event => {}

	render() {
		return (
			<div className='App'>
				<h1>Hi, I'm a React App!</h1>
				<UserInput change={this.handleInputChange}/>
				<UserOutput
					username={this.state.username}
					text='I am the text of the first UserOutput.'
				/>
				<UserOutput
					username='kuwupo'
					text='I am the text of the second UserOutput.'
				/>
			</div>
		);
		// return React.createElement(
		// 	'div',
		// 	null,
		// 	React.createElement('h1', { className: 'App' }, 'Does this work now?')
		// );
	}
}

export default App;
