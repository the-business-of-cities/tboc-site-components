import {
	Page, Section, Container, Row, Column, SecondaryImage,
} from "../../components/toolbox";

import {
	Point,
} from "../../components/Point";


import GenericPage from "../GenericPage";
import marked from "marked";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";

// --------------------------------------------------

// --------------------------------------------------

class ContentPage extends React.Component {
	render () {
		const { title, secondaryImage, description, introduction, content, children, } = this.props;

		return (
			<GenericPage
				title = { title }
				secondaryImage = { secondaryImage }
				description = { description }
				introduction = { introduction }
			>
				{
					content &&
					content.map( (section, i) => (
						<Point
							cta = { {
								link: `/${ slugify(section.ctaTarget.title, { lower: true, }) }`,
								text: section.ctaText,
							} }
							image = { section.image.file.url }
							text = { section.content.content }
							reverse = { i % 2 === 0 }
							{ ...section }
						/>
					) )
				}

				{ children }
			</GenericPage>
		);
	}
};

ContentPage.propTypes = {
	children: PropTypes.any,
	content: PropTypes.any,
	description: PropTypes.any,
	introduction: PropTypes.any,
	secondaryImage: PropTypes.any,
	title: PropTypes.any,
};

export default ContentPage;
