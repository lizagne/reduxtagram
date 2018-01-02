import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component{
	render() {
		return (
			<div>

				<h1>
					<Link to="/">ReduxStagram</Link>
				</h1>

				{ React.cloneElement(this.props.children, this.props) }

			</div>

		)
	}
};

export default Main;


// React.clone element is going to take any props coming down from the parent components and pass them to the children components