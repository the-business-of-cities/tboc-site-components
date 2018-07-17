import styled, { css, } from "styled-components";
import * as mixins from "codogo-utility-functions";
import { theme, } from "../../styles";

import R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import Link from "gatsby-link";

// --------------------------------------------------

const LinkWrapper = styled.div`
	position: relative;

	${ mixins.xs`
		border-top: 1px solid;
		${ R.pipe(R.path([ "theme", "nav", ]), color =>
		mixins.darkenColor(color, 0.2),
	) };
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
		padding: 0.9em ${ props => props.theme.dimensions.nav.margin.xs };
		font-size: 0.9em;
		line-height: 1;

		&.active {
			font-weight: bold;
			background-color: ${ props => mixins.lightenColor(props.theme.colors.nav.background, 0.8) };
		}
	` };

	${ mixins.bp.sm.min`
		display: inline-block;
		height: ${ props => props.theme.dimensions.nav.linksHeight };
		line-height: ${ props => props.theme.dimensions.nav.linksHeight };
		padding: 0 0.75em;
		font-size: 0.8em;
		text-transform: uppercase;

		&.active {
			background-color: ${ props => mixins.lightenColor(props.theme.colors.nav.background, 0.8) };
		}

		&:not(.active):hover {
			background-color: ${ props => mixins.lightenColor(props.theme.colors.nav.background, 0.8) };
		}
	` };
`;

const StyledDropdownLink = styled(StyledLink)`
	${ mixins.bp.md.min`
		background: ${ props => props.theme.colors.background.light };

		&,
		a {
			color: ${ props => props.theme.colors.link } !important;

			&:hover {
				color: ${ props => props.theme.colors.linkHover } !important;
			}
		}
	` };
	
	${ mixins.xs`
		padding-left: 2em;
	` }
`;

const DropdownLinks = styled.div`
	${ mixins.xs`
		font-size: 0.9em;
		opacity: 0.67;
	` };

	${ mixins.bp.sm.min`
		display: none;
		background: ${ R.pipe(R.path([ "theme", "nav", ]), mixins.lightenColor) };
		position: absolute;
		top: ${ props => props.theme.dimensions.nav.linksHeight };
		left: 0;
		width: 22em;

		a {
			display: block;
			border: 0;
		}
	` };
`;

// --------------------------------------------------

const Dropdown = ({ links, }) => (
	<DropdownLinks>
		{
			links.map(({ content, to, }) => (
				<LinkWrapper key = { to }>
					<StyledDropdownLink
						to = { to }
						activeClassName = "active"
						exact
					>
						{ content }
					</StyledDropdownLink>
				</LinkWrapper>
			))
		}
	</DropdownLinks>
);

Dropdown.propTypes = {
	links: PropTypes.array,
};

export default Dropdown;