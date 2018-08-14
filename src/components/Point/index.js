import { Section, Container, Row, Column, Button, Image, MaybeLink, } from "../toolbox";
import { Video, } from "../Video";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import marked from "marked";

const PointImage = styled(Image)`
	max-height: 40vh;
`;

const PointContent = styled.div`
	font-size: 0.9em;
`;

const Point = ( { title, text, image, cta, reverse, bgImage, videoUrl, }, ) => {
	return (
		<Section image = { bgImage }>
			<Container restrict>
				<Row reverse = { reverse }>
					<Column>
						{ title && <h3>{ title }</h3> }

						{ text && 
							<PointContent
								dangerouslySetInnerHTML = { {
									__html: marked(
										text,
									),
								} }
							/> 
						}


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
							( image && String(image.file.contentType).match("video\/.*") !== null ) && <Video video = { image.file.url }/> :
						}

						{ 	
							( image && String(image.file.contentType).match("video\/.*") === null ) && 
								( 
									cta.link ? 
									<MaybeLink to = { cta.link }><PointImage src = { image.file.url } alt = { image.description }/></MaybeLink> : 
									<PointImage src = { image.file.url } alt = { image.description }/> 
								)
						}

						{
							( !image && videoUrl ) && <Video videoUrl = { videoUrl }/>
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
	videoUrl: PropTypes.string,
};

export default Point;