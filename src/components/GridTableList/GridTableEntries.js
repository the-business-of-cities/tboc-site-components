import { MaybeLink, } from "../toolbox";
import * as mixins from "codogo-utility-functions";

import EntryWrapper from "../GenericGrid/EntryWrapper";
import marked from "marked";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";
import Table from "../Table";

// --------------------------------------------------

const padding = 1;
const titleFontSize = 1.1;
const titleLineHeight = 1.3;
const textFontSize = 0.9;
const textLineHeight = 1.4;
const boxHeight =
	2.5 *
	(padding + titleFontSize * titleLineHeight + textFontSize * textLineHeight);


const gridItemWidths = {
  xs: 100,
  sm: 50,
  md: 33.33333,
  lg: 33.33333,
};
const gridColumns = R.map(n => `${n}%`)(gridItemWidths);

const EntryContainer = styled.div`
	display: block;
	margin-bottom: 2em;
  transition: 1s;

  a {
    height: 100%;
    transition: 1s;
  }

  &.table {
    .entry {
      height: 100px;
      width: 100%;
    }
    .image {
      height: 100%;
      width: 104px;
      padding: 0;
    }
    .inner {
      position: static;
      height: 100%;
      width: 100%;
    }
    .text {
      opacity: 0;
      visibility: hidden;
      height: 0;
      padding: 0;
    }
  }
`;

const Entry = styled.div`
  box-sizing: border-box;
  float: left;
  width: 100%;
  height: 300px;
  padding: 0 1em;
  transition: 1s;
  margin-bottom: 2em;

  ${ mixins.bpEach("width", gridColumns) };
`;

const EntryImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
  padding-bottom: ${ 2 * titleLineHeight }em;
  transition: 1s;
`;

const EntryInner = styled.div`
	background-color: ${ props => props.theme.colors.background.dark };
	bottom: 0;
	color: #fff;
	display: block;
	height: 5em;
	left: 0;
	right: 0;
	padding: ${ padding }em;
	position: absolute;
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
					${ props => props.theme.colors.background.dark } 50%
				);
			}
		}
	}
`;

// --------------------------------------------------

const GridTableEntries = ({ entries, slug, table }) => {
	return (
    <EntryContainer className={table && 'table'}>
      {
        entries
          .map( entry => (
            <Entry className="entry">
              <EntryWrapper
                className = "wrapper"
                key = { `entry-${ slugify( entry.title.toLowerCase()) }` } 
                internalUrl = { `/${ slug }/${ slugify( entry.title, { lower: true, } ) }` }
                externalUrl = { entry.externalUrl }
              >
                {
                  entry.image &&
                  <EntryImage
                    className = "image"
                    src = { `https://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_800,h_600,c_fill,g_face,f_auto/https:${ entry.image.file.url }` }
                    alt = { entry.image.description }
                  />
                }

                <EntryInner className = "inner">
                  { entry.title && <EntryTitle>{ entry.title }</EntryTitle> }

                  {
                    entry.description &&
                    <EntryText
                      className="text"
                      dangerouslySetInnerHTML = { {
                        __html: marked(entry.description),
                      } }
                    />
                  }
                </EntryInner>
              </EntryWrapper>
            </Entry>
          )) 
      }
    </EntryContainer>
  );
};

export default GridTableEntries;