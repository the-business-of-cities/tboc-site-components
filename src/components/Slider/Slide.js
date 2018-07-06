import { MaybeLink, } from "../toolbox";
import * as mixins from "codogo-utility-functions";

import marked from "marked";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

// --------------------------------------------------

import { theme, } from "../../styles";

const padding = 1;
const titleFontSize = 1.1;
const titleLineHeight = 1.3;
const textFontSize = 0.9;
const textLineHeight = 1.4;
const boxHeight =
	2 *
	(padding + titleFontSize * titleLineHeight + textFontSize * textLineHeight);

// --------------------------------------------------

const SlideWrapper = styled.div`
	width: 100%;
	height: 40vh;
`;

const SlideTitle = styled.div`
	font-weight: bold;
	font-size: ${ titleFontSize }em;
	font-family: ${ theme.font.heading };
	display: block;
	line-height: ${ titleLineHeight };
	max-height: ${ 2 * titleLineHeight }em;
	overflow: hidden;

	${ SlideInner }:hover & {
		text-decoration: underline;
	}
`;

const SlideInner = styled(MaybeLink)`
	background-color: #000;
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

const SlideText = styled.div`
	font-size: ${ textFontSize }em;
	font-family: ${ theme.font.paragraph };

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
					#000 50%
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
		<SlideWrapper key = { slug }>
			{ image &&
				<SlideImage
					alt = { image.file.description }
					src = { image.file.url }
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
	descriptionHtml: PropTypes.any,
	href: PropTypes.any,
	image: PropTypes.any,
	name: PropTypes.any,
	slug: PropTypes.any,
	title: PropTypes.any,
	to: PropTypes.any,
};

export default Slide;