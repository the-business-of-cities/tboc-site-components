import { compose, } from "recompose";


import Arrow from "./Arrow";
import Slides from "./Slides";
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { theme, } from "../../styles";

// --------------------------------------------------

const snapshotting = window.location.host.includes("localhost:") &&
	parseInt(window.location.host.replace("localhost:", ""), 10) > 9999;

const Wrapper = styled.div`
	transition: 0.1s linear all;
	max-height: 21.4em;
	width: 100%;
	background-color: ${ snapshotting ? theme.colors.bgdark : "transparent" };

	& > div {
		opacity: ${ snapshotting ? 0 : 1 };
	}
`;

const Slider = ( { sliderContents, }, ) => (
	<Wrapper>
		<Slides sliderContents = { sliderContents } />
	</Wrapper>
);

const enhance = compose();

Slider.propTypes = {
	sliderContents: PropTypes.any,
};

export default enhance(Slider);
