import {
	Point,
} from "../../components/Point";


import GenericPage from "../GenericPage";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";

// --------------------------------------------------

// --------------------------------------------------

class ContentPage extends React.Component {
	render () {
		const { 
			children, 
			content,
			description,
			image,
			introduction,
			secondaryImage,
			slider,
			title,
		} = this.props;

		return (
			<GenericPage
				description = { description }
				introduction = { introduction }
				secondaryImage = { secondaryImage }
				slider = { slider }
				title = { title }
				image = { image }
			>
				{
					content &&
					content.map( (section, i) => (
						<Point
							cta = { {
								link: `/${ section.ctaTarget && slugify(section.ctaTarget.title, { lower: true, }) }`,
								text: section.ctaText,
							} }
							image = { section.image }
							bgImage = { section.backgroundImage && section.backgroundImage.file.url }
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
	image: PropTypes.string,
	introduction: PropTypes.any,
	secondaryImage: PropTypes.any,
	slider: PropTypes.element,
	title: PropTypes.any,
};

export default ContentPage;
