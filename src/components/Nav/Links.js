import * as mixins from "codogo-utility-functions";
import styled, { css, } from "styled-components";
import { theme, } from "../../styles";

import * as R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import Dropdown from "./Dropdown";

// --------------------------------------------------

const LinksWrapper = styled.div`
	align-items: center;
	color: ${ props => props.theme.colors.link };
	justify-content: center;
	left: 0;
	margin: auto;
	position: absolute;
	right: 0;

	${ mixins.xs`
		background-color: ${ props => props.theme.colors.nav.background };
		top: ${ props => props.theme.dimensions.nav.height.xs };
		transform: translateY(${ props => (props.open ? 0 : -110) }%);
		transition: 0.3s all ease-out;

		${ mixins.shadow(2) };
	` };

	${ mixins.bp.sm.min`
		display: flex;
		bottom: 0;
		height: ${ props => props.theme.dimensions.nav.linksHeight };
	` };
`;

const LinksContainer = styled.div`
	display: flex;
	bottom: 0;
	width: 100%;
	max-width: ${ props => props.theme.breakpoints.lg.min }px;
	flex-direction: column;

	${ mixins.bp.sm.min`
		flex-direction: row;
		padding: 0 ${ props => props.theme.dimensions.nav.margin.xs };
	` };
`;

const LinkWrapper = styled.div`
	position: relative;

	${ mixins.xs`
		color: ${ props => props.theme.colors.background.white };
		border-top: 1px solid;
	` };

	${ mixins.bp.sm.min`
		color: ${ props => props.theme.colors.nav.alt };

		&:hover {
			> div {
				display: block;
			}
		}
	` };
`;

const StyledLink = styled.div`
	a {
		${ mixins.xs`
			display: block;
			padding: 0.9em ${ props => props.theme.dimensions.nav.margin.xs };
			font-size: 0.9em;
			line-height: 1;

			&a {
				color: #eee;
			}

			&.active {
				font-weight: bold;
				background-color: ${ props => mixins.lightenColor(props.theme.colors.nav.background) };
			}
		` }

		${ mixins.bp.sm.min`
			display: inline-block;
			height: ${ props => props.theme.dimensions.nav.linksHeight };
			line-height: ${ props => props.theme.dimensions.nav.linksHeight };
			padding: 0 0.75em;
			font-size: 0.8em;
			text-transform: uppercase;

			&.active {
				background-color: ${ props => mixins.lightenColor(props.theme.colors.nav.background) };
			}

			&:not(.active):hover {
				background-color: ${ props => mixins.lightenColor(props.theme.colors.nav.background, 0.1) };
			}
		` }
	}
`;

const DropdownArrow = styled.span`
	margin-left: 0.5em;
	font-size: 0.8em;

	${ mixins.xs`
		display: none;
	` };
`;

// --------------------------------------------------

const Links = (props) => {
	const { links, close, open, GatsbyLink, } = props;
	console.log(links);

	return (
		<LinksWrapper open = { open }>
			<LinksContainer>
				{
					links && links.map( link => {
						return (
							<LinkWrapper key = { link.to } onClick = { close }>
								<StyledLink>
									<GatsbyLink to = { link.to } activeClassName = "active">
										{ link.content } 

										{ link.dropdown && <DropdownArrow>▼</DropdownArrow> }
									</GatsbyLink>
								</StyledLink>

								{ 
									link.dropdown && <Dropdown GatsbyLink = { GatsbyLink } links = { link.dropdown } />
								}
							</LinkWrapper>
						);
					})
				}
			</LinksContainer>
		</LinksWrapper>
	);
};

Links.propTypes = {
	close: PropTypes.func,
	gastbyLink: PropTypes.any,
	links: PropTypes.array,
	open: PropTypes.bool,
};

export default Links;
