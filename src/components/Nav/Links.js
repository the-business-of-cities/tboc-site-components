import styled, { css, } from "styled-components";
import * as mixins from "codogo-utility-functions";
import { theme, } from "../../styles";

import R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import Link from "gatsby-link";
import Dropdown from "./Dropdown";

// --------------------------------------------------

const LinksWrapper = styled.div`
	align-items: center;
	left: 0;
	margin: auto;
	position: absolute;
	right: 0;
	justify-content: center;

	${ mixins.xs`
		background-color: ${ props => props.theme.colors.nav.background };
		top: ${ props => theme.dimensions.nav.height.xs };
		transform: translateY(${ props => (props.open ? 0 : -110) }%);
		transition: 0.3s all ease-out;

		${ mixins.shadow(2) };
	` };

	${ mixins.bp.sm.min`
		display: flex;
		bottom: 0;
		height: ${ theme.dimensions.nav.linksHeight };
	` };
`;

const LinksContainer = styled.div`
	display: flex;
	bottom: 0;
	width: 100%;
	max-width: ${ theme.breakpoints.lg.min }px;
	flex-direction: column;

	${ mixins.bp.sm.min`
		flex-direction: row;
		padding: 0 ${ theme.dimensions.nav.margin.xs };
	` };
`;

const LinkWrapper = styled.div`
	position: relative;

	${ mixins.xs`
		border-top: 1px solid;
	` };

	${ mixins.bp.sm.min`
		&:hover {
			> div {
				display: block;
			}
		}
	` };
`;

const StyledLink = styled(Link)`
	color: ${ props => props.theme.colors.link };

	${ mixins.xs`
		display: block;
		padding: 0.9em ${ theme.dimensions.nav.margin.xs };
		font-size: 0.9em;
		line-height: 1;

		&.active {
			font-weight: bold;
			background-color: ${ props => mixins.lightenColor(props.theme.colors.nav.background) };
		}
	` }

	${ mixins.bp.sm.min`
		display: inline-block;
		height: ${ theme.dimensions.nav.linksHeight };
		line-height: ${ theme.dimensions.nav.linksHeight };
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
`;

const DropdownArrow = styled.span`
	margin-left: 0.5em;
	font-size: 0.8em;

	${ mixins.xs`
		display: none;
	` };
`;

// --------------------------------------------------

const Links = ({ links, close, open, }) => (
	<LinksWrapper open = { open }>
		<LinksContainer>
			{
				links && links.map( link => {
					return (
						<LinkWrapper key = { link.to } onClick = { close }>
							<StyledLink to = { link.to } activeClassName = "active" exact>
								{ link.content } 

								{ link.dropdown && <DropdownArrow>▼</DropdownArrow> }
							</StyledLink>

							{ 
								link.dropdown && <Dropdown links = { link.dropdown } />
							}
						</LinkWrapper>
					);
				})
			}
		</LinksContainer>
	</LinksWrapper>
);

Links.propTypes = {
	close: PropTypes.func,
	links: PropTypes.array,
	open: PropTypes.bool,
};

export default Links;
