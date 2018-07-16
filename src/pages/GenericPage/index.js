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
		const { title, image, secondaryImage, description, introduction, children, slider, } = this.props;

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
									<h1>{ title }</h1>
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
					( description || introduction ) &&
					<Section>
						<Container narrow>
							{
								description &&
								<Row>
									<Column>
										<div><em>{ description }</em></div>
									</Column>
								</Row>
							}
						
							{ 
								introduction &&
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
							}
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
	introduction: PropTypes.any,
	image: PropTypes.string,
	secondaryImage: PropTypes.object,
	slider: PropTypes.element,
	title: PropTypes.any,
};

export default GenericPage;
