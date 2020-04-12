import React, { Component } from "react";

class Buttons extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.handleUp}>Up</button>
				<button onClick={this.props.handleDown}>Down</button>
			</div>
		);
	}
}

export default Buttons;
