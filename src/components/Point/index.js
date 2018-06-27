import { Section, Container, Row, Column, } from "../toolbox";
import PropTypes from "prop-types";
import React from "react";

const Point = ( { title, text, image, cta, reverse, }, ) => {

	return (
		<Section>
			<Container restrict>
				<Row reverse = { reverse }>
					<Column>
						<h3>{ title }</h3>

						<p>{ text }</p>

						<a href = { cta.link }>{ cta.text }</a>
					</Column>

					<Column>
						<img src = { image } alt = "Alt text"/>
					</Column>
				</Row>
			</Container>
		</Section>
	);
};

Point.propTypes = {
	cta: PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string,
	}),
	image: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
	reverse: PropTypes.bool,
};

export default Point;