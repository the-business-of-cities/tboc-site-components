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
		const { title, secondaryImage, slider, description, introduction, content, children, } = this.props;

		return (
			<GenericPage
				description = { description }
				introduction = { introduction }
				secondaryImage = { secondaryImage }
				slider = { slider }
				title = { title }
			>
				{
					content &&
					content.map( (section, i) => (
						<Point
							cta = { {
								link: `/${ section.ctaTarget && slugify(section.ctaTarget.title, { lower: true, }) }`,
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
	slider: PropTypes.element,
	title: PropTypes.any,
};

export default ContentPage;
