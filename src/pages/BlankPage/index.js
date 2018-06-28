import {
	Page, Section, Container, Row, Column,
} from "../../components/toolbox";

import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

class BlankPage extends React.Component {
	render () {
		const { children, slider, } = this.props;

		return (
			<Page>
				{
					slider &&
					slider
				}

				<Section>
					<Container restrict>
						<Row>
							<Column>
								{ children }
							</Column>
						</Row>
					</Container>
				</Section>
			</Page>
		);
	}
};

BlankPage.propTypes = {
	children: PropTypes.any,
	slider: PropTypes.any,
};

export default BlankPage;
