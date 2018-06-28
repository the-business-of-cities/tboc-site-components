import Carousel from "nuka-carousel";
import PropTypes from "prop-types";
import React from "react";
import Slide from "./Slide";

// --------------------------------------------------


// --------------------------------------------------

const Slides = ( { sliderContents, mobile, }, ) => (
	<Carousel
		autoplay
		dragging
		renderBottomCenterControls = { () => null }
		slidesToShow = { mobile ? 1 : 3 }
		width = { "100%" }
	>
		{ 
			sliderContents.map( ( ( slide, ) => {
				return <Slide title = { slide.title } image = { slide.image } description = { slide.description } /> ;
			}), ) 
		}
	</Carousel>
);

Slides.propTypes = {
	sliderContents: PropTypes.array,
	sliderSettings: PropTypes.object,
};

export default Slides;
