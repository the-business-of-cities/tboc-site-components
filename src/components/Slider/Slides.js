import { MaybeLink, } from "../toolbox";
import * as mixins from "codogo-utility-functions";

import styled from "styled-components";
import Carousel from "nuka-carousel";
import PropTypes from "prop-types";
import React from "react";
import R from "ramda";

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

const SlideInner = styled(MaybeLink)`
	display: block;
	background-color: ${ R.path([ "theme", "nav", ]) };
	padding: ${ padding }em;
	height: ${ boxHeight }em;
	position: absolute;
	bottom: 0;
	left: 0;
	color: ${ R.path([ "theme", "bg", ]) };

	&:hover {
		color: ${ R.path([ "theme", "bgdark", ]) };
	}
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
					${ R.path([ "theme", "nav", ]) } 50%
				);
			}
		}
	}
`;

const SlideImage = styled.div`
	${ mixins.bgImage } height: 14em;
`;

// --------------------------------------------------

const Slides = ({ slideContents, sliderSettings, }) => (
	<Carousel
		autoplay
		dragging
		renderBottomCenterControls = { () => null }
		slidesToShow = { 3 }
	>
		{slideContents.map(
			({ image, name, title, descriptionHtml, to, href, slug, }, i) => (
				<div key = { slug } style = { { width: "100%", height: "30vh", } }>
					{ image &&
						<img
							alt = { image.description }
							src = { image.url }
							style = { {
								width: "100%",
								height: "100%",
								objectFit: "cover",
								position: "absolute",
							} }
						/>
					}

					<SlideInner to = { to } href = { href }>
						<SlideTitle>{title || name}</SlideTitle>

						<SlideText
							dangerouslySetInnerHTML = { {
								__html: descriptionHtml,
							} }
						/>
					</SlideInner>
				</div>
			),
		)}
	</Carousel>
);

Slides.propTypes = {
	slideContents: PropTypes.any,
	sliderSettings: PropTypes.any,
};

export default Slides;
