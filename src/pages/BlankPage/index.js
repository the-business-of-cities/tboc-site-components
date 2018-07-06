import {
	Page, Section, Container, Row, Column,
} from "../../components/toolbox";

import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

class BlankPage extends React.Component {
	render () {
		const { children, slider, introduction, content, } = this.props;

		return (
			<Page>
				{ slider }

				{ children }
			</Page>
		);
	}
};

BlankPage.propTypes = {
	children: PropTypes.array,
	slider: PropTypes.element,
};

export default BlankPage;
