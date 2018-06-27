import * as mixins from "codogo-utility-functions";


import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { MaybeLink, } from "../Links";
import { Icon, } from "../Images";

// --------------------------------------------------

export const ButtonWrapper = styled.div`
	align-items: center;
	cursor: pointer;
	display: inline-flex;
	flex-direction: row;
	height: 2.6em;
	justify-content: center;
	line-height: 1;
	padding: 0 1em;
	transition: 0.1s linear background;

	${ props => (props.margin ? "margin: 0.3em;" : "") };

	&:hover,
	&:visited,
	&:active {
		color: ${ props => props.color };
	}

	${ ({ outline, color, hoverColor, }) =>
		outline || true
			? css`
					color: ${ color };
					border: 1.5px solid ${ color };
					${ mixins.xs`border-width: 1px;` } background: transparent;

					&:hover,
					&:visited,
					&:active {
						color: ${ color };
					}
			  `
			: `
				color: white;
				background: ${ color };

				&:hover,
				&:visited,
				&:active {
					color: white;
				}

				&:hover {
					background: ${ hoverColor };
				}
			` };
`;

const IconButton = props => {
	return (
		<MaybeLink to = { props.to } href = { props.href } target = { props.target }>
			<ButtonWrapper { ...props }>
				{props.icon ? (
					<Icon type = { props.icon } size = "1.2em" marginRight = "0.4em" />
				) : null}

				<span>{props.text || props.children}</span>
			</ButtonWrapper>
		</MaybeLink>
	);
};

IconButton.propTypes = {
	children: PropTypes.any,
	href: PropTypes.any,
	icon: PropTypes.any,
	target: PropTypes.any,
	text: PropTypes.any,
	to: PropTypes.any,
};

export const Button = IconButton;