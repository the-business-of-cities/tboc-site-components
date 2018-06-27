import { compose, } from "recompose";

import Slides from "./Slides";
import { Section, Container, Row, } from "../toolbox";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const Slider = ( { sliderContents, }, ) => (
	<Section>
		<Container>
			<Row>
				<Slides sliderContents = { sliderContents } />
			</Row>
		</Container>
	</Section>
);

const enhance = compose();

Slider.propTypes = {
	sliderContents: PropTypes.any,
};

export default enhance(Slider);
