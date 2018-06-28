import { Section, Container, Row, Column, Button, Image, } from "../toolbox";
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