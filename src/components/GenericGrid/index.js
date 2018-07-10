import { MaybeLink, } from "../toolbox";
import * as mixins from "codogo-utility-functions";

import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import marked from "marked";
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

const entryColumns = {
	xs: 2,
	sm: 3,
	md: 4,
	lg: 4,
};

const gridColumns = R.map(n => `repeat(${ n }, 1fr)`)(entryColumns);

const EntryContainer = styled.div`
	display: grid;
	${ mixins.bpEach("grid-template-columns", gridColumns) };
	grid-gap: 2em;
	margin-bottom: 2em;
	width: 100%;
`;

const EntryWrapper = styled.a`
	display: flex;
	width: 100%;
	position: relative;
	overflow: hidden;
`;

const EntryImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const EntryInner = styled(MaybeLink)`
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


const EntryTitle = styled.div`
	font-weight: bold;
	font-size: ${ titleFontSize }em;
	font-family: ${ props => props.theme.font.heading };
	display: block;
	line-height: ${ titleLineHeight };
	height: ${ 2 * titleLineHeight }em;
	overflow: hidden;
`;

const EntryText = styled.div`
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

// --------------------------------------------------

const GenericGrid = ( { entries, slug, } ) => {
	return (
		<EntryContainer>
			{
				entries.map( entry => (
					<EntryWrapper key = { slugify( entry.node.title.toLowerCase() ) } href = { `/${ slug }/${ slugify( entry.node.title.toLowerCase() ) }` }>
						{
							entry.node.image &&
							<EntryImage
								src = { `http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ entry.node.image.file.url }` }
								alt = { entry.node.image.file.description }
							/>
						}

						<EntryInner>
							<EntryTitle>{ entry.node.title }</EntryTitle>

							{
								entry.node.description &&
								<EntryText
									dangerouslySetInnerHTML = { {
										__html: marked(entry.node.description),
									} }
								/>
							}
						</EntryInner>
					</EntryWrapper>
				) )
			}
		</EntryContainer>
	);
};

GenericGrid.propTypes = {
	entries: PropTypes.array.isRequired,
	slug: PropTypes.string,
};

export default GenericGrid;
