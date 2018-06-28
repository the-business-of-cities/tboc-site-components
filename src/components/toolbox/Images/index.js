import * as mixins from "codogo-utility-functions";

import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import R from "ramda";

// --------------------------------------------------

const Image = styled.img`
	width: 100%;
	height: auto;
`;

// --------------------------------------------------

const SecondaryImageWrapper = styled.div`
	img {
		width: 100%;
		max-height: 1em;
	}
`;

const SecondaryImageDiv = styled.div`
	${ mixins.bgImage };
	padding-top: 15em;

	${ mixins.bp.sm.min`padding-top: 20em;` };
`;

const SecondaryImage = ( props ) => (
	<SecondaryImageWrapper>
		<SecondaryImageDiv src = { props.src } />
	</SecondaryImageWrapper>
);

// --------------------------------------------------

const SmartImage = styled.div`
	${ props =>
		props.height && props.width
			? props.height <= props.width || props.unlimitedHeight
				? `
				width: 100%;
				padding-top: ${ 100 * (props.height / props.width) }%;
			`
				: `
				width: ${ 100 * (props.width / props.height) }%;
				padding-top: 100%;
			`
			: `
			width: 100%;
			padding-top: 100%;
		` };
	background-color: rgba(0, 0, 0, 0.2);
	background-image: url(${ R.prop("url") });
	background-size: cover;
	background-position: center center;
	background-repeat: norepeat;
	margin-left: auto;
`;

// --------------------------------------------------

const IconWrapper = styled.i`
	font-size: ${ props => props.size || "1em" };
	margin-right: ${ props => props.marginRight || 0 };
	margin-left: ${ props => props.marginLeft || 0 };
`;

const Icon = props => (
	<IconWrapper className = { `fa fa-${ props.type }` } { ...props } />
);

// --------------------------------------------------

const bgTint = 0.3;

const Background = styled.div`
	${ props =>
		props.image
			? `
				background-image:
				linear-gradient( rgba(0,0,0,${ props.tint || bgTint }), rgba(0,0,0,${ props.tint ||
					bgTint }) ),
				url(${ props.image });
				background-size: cover;
				background-position: center center;
			`
			: "" };
	${ props => (props.color ? `background-color: ${ props.color };` : "") };
`;

export { Image, SmartImage, SecondaryImage, Icon, Background, };