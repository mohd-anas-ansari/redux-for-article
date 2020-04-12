import React, { Component } from "react";

console.log(this, "inside  Count");

export class Count extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
			</div>
		);
	}
}

export default Count;
