import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Buttons from "./components/Buttons";
import Count from "./components/Count";
import { ADD_COUNT, REMOVE_COUNT } from "./redux/type";


export class App extends Component {

	handleUp = () => {
		// this.setState({ count: this.state.count + 1 });
		this.props.dispatch({type: ADD_COUNT})
	};

	handleDown = () => {
		// this.setState({ count: this.state.count - 1 });
		this.props.dispatch({type: REMOVE_COUNT})
	};

	render() {
		return (
			<div className="App">
				<h1>App</h1>
				<Count />
				<Buttons handleUp={this.handleUp} handleDown={this.handleDown} />
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		state
	}
}

export default connect(mapStateToProps)(App);
