import {
	SecondaryImage,
} from "../../components/toolbox";

import BlankPage from "../BlankPage";
import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

class GenericPage extends React.Component {
	render () {
		const { title, secondaryImage, description, introduction, children, } = this.props;

		return (
			<BlankPage>
				<h1>{ title }</h1>
				
				{
					secondaryImage && 
					(
						<SecondaryImage src = { secondaryImage.file.url } />
					)
				}

				<div><em>{ description }</em></div>

				{ introduction &&
					<div
						dangerouslySetInnerHTML = { {
							__html: marked(
								introduction.introduction,
							),
						} }
					/>
				}

				{ children }
			</BlankPage>
		);
	}
};

GenericPage.propTypes = {
	children: PropTypes.any,
	description: PropTypes.any,
	introduction: PropTypes.any,
	secondaryImage: PropTypes.any,
	title: PropTypes.any,
};

export default GenericPage;
