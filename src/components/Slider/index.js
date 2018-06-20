import { compose, } from "recompose";
import * as vars from "../../style/vars";

import Arrow from "./Arrow";
import Slides from "./Slides";
import styled from "styled-components";
import React from "react";

// --------------------------------------------------

const snapshotting =
	window.location.host.includes("localhost:") &&
	parseInt(window.location.host.replace("localhost:", ""), 10) > 9999;

// --------------------------------------------------

const Wrapper = styled.div`
	transition: 0.1s linear all;
	max-height: 21.4em;
	background-color: ${ snapshotting ? vars.colors.bgdark : "transparent" };

	& > div {
		opacity: ${ snapshotting ? 0 : 1 };
	}
`;

const sliderSettings = {
	dots: true,
	speed: 500,
	slidesToScroll: 1,
	arrows: true,
	swipe: true,
	focusOnSelect: true,
	centerMode: true,
	centerPadding: 0,
	...(snapshotting
		? { slidesToShow: 1, }
		: {
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 100000,
					settings: {
						slidesToShow: 3,
					},
				},
			],
		  }),
	infinite: true,
	nextArrow: <Arrow next />,
	prevArrow: <Arrow prev />,
};

const Slider = ({ slideContents, }) => (
	<Wrapper>
		<Slides sliderSettings = { sliderSettings } slideContents = { slideContents } />
	</Wrapper>
);

const enhance = compose();

export default enhance(Slider);
