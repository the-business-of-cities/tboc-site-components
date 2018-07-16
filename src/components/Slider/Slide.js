import { MaybeLink, } from "../toolbox";

import marked from "marked";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

// --------------------------------------------------

const padding = 1;
const titleFontSize = 1.1;
const titleLineHeight = 1.3;
const textFontSize = 0.9;
const textLineHeight = 1.4;
const boxHeight =
	2.5 *
	(padding + titleFontSize * titleLineHeight + textFontSize * textLineHeight);

// --------------------------------------------------

const SlideWrapper = styled.div`
	width: 100%;
	height: 40vh;
`;

const SlideInner = styled(MaybeLink)`
	background-color: ${ props => props.theme.colors.bg.dark };
	bottom: 0;
	color: #fff;
	display: block;
	height: 5em;
	left: 0;
	padding: ${ padding }em;
	position: absolute;
	right: 0;
	transition-duration: 0.5s;

	&:hover {
		color: #eee;
		height: ${ boxHeight }em;
	}

	&:visited {
		color: #fff !important;
	}
`;

const SlideTitle = styled.div`
	font-weight: bold;
	font-size: ${ titleFontSize }em;
	font-family: ${ props => props.theme.font.heading };
	display: block;
	line-height: ${ titleLineHeight };
	height: ${ 2 * titleLineHeight }em;
	overflow: hidden;

	${ SlideInner }:hover & {
		text-decoration: underline;
	}
`;

const SlideText = styled.div`
	font-size: ${ textFontSize }em;
	font-family: ${ props => props.theme.font.paragraph };
	padding-top: 2em;

	& p {
		margin: 0;

		&:last-child {
			line-height: ${ textLineHeight };
			height: ${ 2 * textLineHeight }em;
			position: relative;
			overflow: hidden;

			&:after {
				content: "\u25B6";
				position: absolute;
				bottom: 0;
				right: 0;
				width: 70%;
				height: ${ textLineHeight }em;
				text-align: right;
				background: linear-gradient(
					to right,
					transparent,
					${ props => props.theme.colors.bg.dark } 50%
				);
			}
		}
	}
`;

const SlideImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
`;

// --------------------------------------------------

const Slide = ( { title, image, description, } ) => {
	const slug = slugify( title );

	return (
		<SlideWrapper>
			{ image &&
				<SlideImage
					src = { `http://res.cloudinary.com/codogo/image/fetch/h_800,c_fill,g_face,f_auto/https:${ image.file.url }` }
					alt = { image.file.description }
				/>
			}

			<SlideInner to = { slug } href = { slug }>
				<SlideTitle>{ title }</SlideTitle>

				{ description && (
					<SlideText
						dangerouslySetInnerHTML = { {
							__html: marked(description),
						} }
					/>
				) }
			</SlideInner>
		</SlideWrapper>
	);
};

Slide.propTypes = {
	description: PropTypes.string,
	image: PropTypes.object,
	title: PropTypes.string,
};

export default Slide;