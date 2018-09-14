import Carousel from "nuka-carousel";
import PropTypes from "prop-types";
import React from "react";
import Slide from "./Slide";
import slugify from "slugify";

// --------------------------------------------------


const colorMap = ( i, colors, ) => {
	if( i % 3 === 0 ) {
		return colors.tertiary;
	} else if( i % 2 === 0 ) {
		return colors.secondary; 
	} else {
		return colors.primary;
	}
};


// --------------------------------------------------

const Slides = ( { sliderContents, mobile, }, ) => {
	return (
		<Carousel
			autoplay
			renderBottomCenterControls = { null }
			slidesToShow = { mobile ? 1 : 3 }
		>
			{ 
				sliderContents.map( ( ( slide, i ) => {
					return (
						<Slide
							key = { `slider-slide-${ slugify(slide.title, { lower: true, } ) }` } 
							title = { slide.title } 
							image = { slide.image } 
							description = { slide.description } 
							colorCount = { i + 1 }
							externalUrl = {slide.externalUrl }
						/> 
					);
				}), ) 
			}
		</Carousel>
	);
};

Slides.propTypes = {
	mobile: PropTypes.bool,
	sliderContents: PropTypes.array,
	sliderSettings: PropTypes.object,
};

export default Slides;
