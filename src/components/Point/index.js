import { Row, Column, Button, Image, } from "../toolbox";
import PropTypes from "prop-types";
import React from "react";

const Point = ( { title, text, image, cta, reverse, }, ) => {
	return (
		<Row reverse = { reverse }>
			<Column>
				<h3>{ title }</h3>

				<p>{ text }</p>

				<Button 
					to = { cta.link }
					text = { cta.text }
					outline = "black"
				/>
			</Column>

			<Column>
				<Image src = { image } alt = "Alt text"/>
			</Column>
		</Row>
	);
};

Point.propTypes = {
	cta: PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string,
	}),
	image: PropTypes.string,
	reverse: PropTypes.bool,
	text: PropTypes.string,
	title: PropTypes.string,
};

export default Point;