import styled, { css, } from "styled-components";
import { NavLink, } from "react-router-dom";
import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";

import R from "ramda";
import React from "react";
import Link from "gatsby-link";

// --------------------------------------------------

const wrapperStyle = [
	css`
		transform: translateY(${ props => (props.open ? 0 : -110) }%);
		transition: 0.3s all ease-out;
		${ mixins.shadow(2) } position: absolute;
		left: 0;
		right: 0;
		top: ${ vars.dim.nav.height.xs };
		background-color: ${ props => props.theme.colors.nav };
		align-items: center;
	`,

	`
		position: absolute;
		right: ${ vars.dim.nav.margin.other };
		left: ${ vars.dim.nav.margin.other };
		bottom: 0;
		height: ${ vars.dim.nav.linksHeight };
		display: flex;
		align-items: center;
	`,
];

const Wrapper = styled.div`
	${ mixins.xs`${ wrapperStyle[0] }` };
	${ mixins.bp.sm.min`${ wrapperStyle[1] }` };
	margin: auto;
`;

const buttonStyle = [
	css`
		display: block;
		padding: 0.9em ${ vars.dim.nav.margin.xs };
		font-size: 0.9em;

		content: ${ R.pipe(R.path([ "theme", "nav", ])) };
		line-height: 1;

		&.active {
			font-weight: bold;
			background-color: ${ R.pipe(R.path([ "theme", "nav", ]), color =>
				mixins.lightenColor(color, 0.1),
			) };
		}
	`,

	`
		display: inline-block;
		height: ${ vars.dim.nav.linksHeight };
		line-height: ${ vars.dim.nav.linksHeight };
		padding: 0 0.75em;
		font-size: 0.8em;
		text-transform: uppercase;

		&.active {
			background-color: rgba(255,255,255,0.3);
		}

		&:not(.active):hover {
			background-color: rgba(255,255,255,0.1);
		}
	`,
];

const LinkWrapper = styled.div`
	position: relative;

	${ mixins.xs`
		border-top: 1px solid;
		${ R.pipe(R.path([ "theme", "nav", ]), color =>
			mixins.darkenColor(color, 0.2),
		) };
	
		&:first-child {
			}
	` };

	${ mixins.bp.sm.min`
		&:hover {
			> div {
				display: block;
			}
		}
	` };
`;

const Link = styled(NavLink)`
	color: ${ props => props.theme.colors.logo1 };

	${ mixins.xs`${ buttonStyle[0] }` };
	${ mixins.bp.sm.min`${ buttonStyle[1] }` };
`;

const DropdownLinks = styled.div`
	${ mixins.xs`
		padding-left: 1em;
		font-size: 0.9em;
		opacity: 0.67;
	` } ${ mixins.bp.sm.min`
		display: none;
		background: ${ R.pipe(R.path([ "theme", "nav", ]), mixins.lightenColor) };
		position: absolute;
		top: ${ vars.dim.nav.linksHeight };
		left: 0;
		width: 22em;

		a {
			display: block;
			border: 0;
		}
	` };
`;

const DropdownArrow = styled.span`
	margin-left: 0.5em;
	font-size: 0.8em;

	${ mixins.xs`
		display: none;
	` };
`;

// --------------------------------------------------

export default ({ links, close, open, ...props, }) => (
	<Wrapper open = { open }>
		{
			links && links.map( link => {
				console.log(link),
				(
					<LinkWrapper key = { link.to } onClick = { close }>
						<Link to = { link.to } activeClassName = "active" exact>
							{ link.content } { link.dropdown && <DropdownArrow>▼</DropdownArrow> }
						</Link>

						{ 
							false && (
								<DropdownLinks>
									{link.dropdown
										.map(({ title, path, }) => (
											<LinkWrapper key = { path }>
												<Link
													to = { path }
													activeClassName = "active"
													exact
												>
													{title}
												</Link>
											</LinkWrapper>
										))}
								</DropdownLinks>
							)
						}
					</LinkWrapper>
				)
			})
		}
	</Wrapper>
);
