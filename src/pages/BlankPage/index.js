import { Page, } from "../../components/toolbox";

import { Slider, Banner, } from "../../components";

import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

class BlankPage extends React.Component {
	render () {
		const { children, sliderContents, banner, GatsbyLink, } = this.props;

		return (
			<Page>
				{ 
					banner && <Banner text = { banner.text } />
				}

				{ 
					sliderContents && <Slider GatsbyLink = { GatsbyLink } sliderContents = { sliderContents }/>
				}

				{ children }
			</Page>
		);
	}
};

BlankPage.propTypes = {
	GatsbyLink: PropTypes.any,
	banner: PropTypes.object,
	children: PropTypes.array,
	sliderContents: PropTypes.array,
};

export default BlankPage;
