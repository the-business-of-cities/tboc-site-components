import {
	SecondaryImage,
	Section,
	Container,
	Row,
	Column,
} from "../../components/toolbox";

import BlankPage from "../BlankPage";
import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

class GenericPage extends React.Component {
	render () {
		const { 
			children,
			description,
			image,
			introduction,
			secondaryImage,
			slider,
			subtitle,
			title,
		} = this.props;

		return (
			<BlankPage
				slider = { slider }
				image = { image }
			>
				{
					title &&
					<Section
						image = { image }
					>
						<Container narrow>
							<Row>
								<Column>
									{ title && <h1>{ title }</h1> }

									{ subtitle &&  <p>{ subtitle }</p> }
								</Column>
							</Row>
						</Container>
					</Section>
				}

				{
					secondaryImage && 
					<Section>
						<Container>
							<Row>
								<Column>
									<SecondaryImage alt = { secondaryImage.description } src = { secondaryImage.file.url } />
								</Column>
							</Row>
						</Container>
					</Section>
				}

				{
					description &&
					<Section>
						<Container narrow>
							<Row>
								<Column>
									<div><em>{ description }</em></div>
								</Column>
							</Row>
						</Container>
					</Section>
				}

				{
					introduction &&
					<Section>
						<Container narrow>
							<Row>
								<Column>
									<div
										dangerouslySetInnerHTML = { {
											__html: marked(
												introduction,
											),
										} }
									/>
								</Column>
							</Row>
						</Container>
					</Section>
				}

				{ children }
			</BlankPage>
		);
	}
};

GenericPage.propTypes = {
	children: PropTypes.any,
	description: PropTypes.any,
	image: PropTypes.string,
	introduction: PropTypes.any,
	secondaryImage: PropTypes.object,
	slider: PropTypes.element,
	subtitle: PropTypes.any,
	title: PropTypes.any,
};

export default GenericPage;
