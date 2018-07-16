import Carousel from "nuka-carousel";
import PropTypes from "prop-types";
import React from "react";
import Slide from "./Slide";
import slugify from "slugify";

// --------------------------------------------------


// --------------------------------------------------

const Slides = ( { sliderContents, mobile, }, ) => {
	return (
		<Carousel
			autoplay
			renderBottomCenterControls = { null }
			slidesToShow = { mobile ? 1 : 3 }
		>
			{ 
				sliderContents.map( ( ( slide, ) => {
					return (
						<Slide
							key = { `slider-slide-${ slugify(slide.title.toLowerCase()) }` } 
							title = { slide.title } 
							image = { slide.image } 
							description = { slide.description } 
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
