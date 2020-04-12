import React, { Component } from "react";
import { connect } from "react-redux";

export class Count extends Component {
	render() {
		console.log(this, "inside Count Component");
		return (
			<div>
				<h1>{this.props.count}</h1>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		count: state.count
	}
}

export default connect(mapStateToProps)(Count);
