import { Section, Container, Row, Column, Button, Image, MaybeLink, } from "../toolbox";
import { Video, } from "../Video";

import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";
import marked from "marked";

const PointImage = styled(Image)`
	max-height: 40vh;
`;

const PointContent = styled.div`
	font-size: 0.9em;
`;

const Point = ( props ) => {
	const { title, text, image, cta, ctaLink, ctaText, reverse, bgImage, videoUrl, } = props;
	const imageIsVideo = image && String(image.file.contentType).match("video\/.*") !== null;

	const fullCTA = {
		link: cta || ctaLink,
		text: ctaText,
	};

	return (
		<Section image = { bgImage } id = { slugify(title, { lower: true, }, ) }>
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

						{ 
							( fullCTA && fullCTA.link && fullCTA.text ) &&
								<Button 
									to = { fullCTA.link }
									text = { fullCTA.text }
									outline = "black"
								/>
						}
					</Column>
					
					{ image && 
						<Column>
							{ 
								( imageIsVideo ) &&  
								<Video video = { image.file.url }/>
							}

							{ 	
								( !imageIsVideo && fullCTA && fullCTA.link ) ? 
									<MaybeLink to = { fullCTA.link } href = { fullCTA.link }><PointImage src = { image.file.url } alt = { image.description }/></MaybeLink> : 
									<PointImage src = { image.file.url } alt = { image.description }/> 
							}

							{
								( !image && videoUrl ) && <Video videoUrl = { videoUrl }/>
							}
						</Column>
					}
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