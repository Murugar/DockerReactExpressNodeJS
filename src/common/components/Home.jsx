import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShortLink extends Component {

	static contextTypes = {
		store: PropTypes.object.isRequired,
	};

	render() {
		let nodes = (
			<div>
				<h1>Welcome to the NodeJS Express React Stack</h1>

			</div>
		);

		return nodes;
	}
}
