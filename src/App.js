import React, { Component } from "react";

import "./App.css";
import Buttons from "./components/Buttons";
import Count from "./components/Count";

export class App extends Component {
	state = {
		count: 0,
	};

	handleUp = () => {
		this.setState({ count: this.state.count + 1 });
	};

	handleDown = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		return (
			<div className="App">
				<h1>App</h1>
				<Count count={this.state.count} />
				<Buttons handleUp={this.handleUp} handleDown={this.handleDown} />
			</div>
		);
	}
}

export default App;
