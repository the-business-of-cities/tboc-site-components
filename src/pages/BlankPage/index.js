import { Page, } from "../../components/toolbox";

import { Slider, Banner, } from "../../components";

import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

class BlankPage extends React.Component {
	render () {
		const { children, sliderContents, banner, introduction, } = this.props;

		return (
			<Page>
				{ 
					banner && <Banner text = { banner.text } />
				}

				{ 
					sliderContents && <Slider sliderContents = { sliderContents }/>
				}

				{ children }
			</Page>
		);
	}
};

BlankPage.propTypes = {
	banner: PropTypes.object,
	children: PropTypes.array,
	introduction: PropTypes.any,
	sliderContents: PropTypes.array,
};

export default BlankPage;
