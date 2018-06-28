import {
	Page, Section, Container, Row, Column, SecondaryImage,
} from "../../components/toolbox";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

class GenericPage extends React.Component {
	render () {
		const { title, secondaryImage, description, introduction, } = this.props;

		return (
			<Page>
				<Section>
					<Container restrict>
						<Row>
							<Column>
								<h1>{ title }</h1>
							</Column>
						</Row>

						<Row>
							<Column>
								{
									secondaryImage && 
									(
										<SecondaryImage src = { secondaryImage.file.url } />
									)
								}

								<div><em>{ description }</em></div>

								{ introduction &&
									<div
										dangerouslySetInnerHTML = { {
											__html: marked(
												introduction,
											),
										} }
									/>
								}

								{ this.props.children }
							</Column>
						</Row>
					</Container>
				</Section>
			</Page>
		);
	}
};

GenericPage.propTypes = {
	content: PropTypes.any,
	description: PropTypes.any,
	secondaryImage: PropTypes.any,
	title: PropTypes.any,
};

export { GenericPage, };
