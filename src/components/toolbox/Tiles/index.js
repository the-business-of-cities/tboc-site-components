import * as mixins from "codogo-utility-functions";

import styled from "styled-components";

import PropTypes from "prop-types";
import React from "react";

import { theme, } from "../../../styles";

// --------------------------------------------------

export const TilesWrapper = styled.div`
	${ mixins.clearfix };
`;

export const TileWrapper = styled.div`
	width: ${ props => (props.small ? "50%" : "100%") };
	width: 50%;
	${ mixins.xs`width: 100%` };
	float: left;
`;

export const TileInner = styled.div`
	position: relative;
	${ mixins.bp.sm.min`padding : 0` };
	margin-bottom: 1em;
`;

export const TileContent = styled.div`
	background: ${ props => props.theme.colors.background.medium };
	margin-top: -2em;
	left: 0;
	margin-right: 1.5em;
	margin-bottom: 1em;
	padding: 0.5em 1em;

	p {
		font-size: 0.95em;
	}
`;

export const TileImage = styled.div`
	margin-left: 1.5em;
`;

export const TileTitle = styled.h3`
	margin-bottom: 0;

	:hover,
	:active {
		opacity: 0.7;
	}

	:after {
		content: "";
		display: block;
		width: 5em;
		border-bottom: 0.4em solid rgba(0, 0, 0, 0.15);
	}
`;
