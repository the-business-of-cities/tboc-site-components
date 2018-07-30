import { Section, Container, Row, Column, Button, Image, } from "../toolbox";
import { Video, } from "../Video";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const PointImage = styled(Image)`
	max-height: 40vh;
`;

const Point = ( { title, text, image, cta, reverse, bgImage, }, ) => {
	return (
		<Section image = { bgImage }>
			<Container restrict>
				<Row reverse = { reverse }>
					<Column>
						{ title && <h3>{ title }</h3> }

						{ text && <p>{ text }</p> }

						{ cta && 
							(( cta.link && cta.text) &&
								<Button 
									to = { cta.link }
									text = { cta.text }
									outline = "black"
								/>
							)
						}
					</Column>

					<Column>
						{ 
							image && (
								String(image.file.contentType).match("video\/.*") !== null ?
									<Video video = { image.file.url }/> :
									<PointImage src = { image.file.url } alt = { image.description }/>
							)
						}
					</Column>
				</Row>
			</Container>
		</Section>
	);
};

Point.propTypes = {
	bgImage: PropTypes.string,
	cta: PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string,
	}),
	image: PropTypes.shape({
		file: PropTypes.object,
		description: PropTypes.string,
	}),
	reverse: PropTypes.bool,
	text: PropTypes.string,
	title: PropTypes.string,
};

export default Point;