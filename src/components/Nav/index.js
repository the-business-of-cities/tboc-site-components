import { Fade, } from "../toolbox";
import { compose, withState, withHandlers, } from "recompose";

import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";

import Links from "./Links";
import Logo from "./Logo";
import Burger from "./Burger";
import styled from "styled-components";
import React from "react";

// --------------------------------------------------

const Wrapper = styled.nav`
	${ mixins.bp.xs.min`${ mixins.shadow(0) }` } 
	${ props => mixins.bpEither("height", props.theme.dimensions.nav.height) }
	background: black;
	background-color: ${ props => props.theme.colors.nav };
	color: white;
	left: 0;

	right: 0;
	top: 0;
	z-index: 10;

	& a {
		color: white !important;
	}
`;

const Inner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	max-width: ${ vars.bps.lg.min }px;
	margin: 0 auto;
`;

const MobileStuff = styled.div`
	${ mixins.bp.sm.min`display: none;` };
	${ mixins.contained() };
`;

const Dark = styled.div`
	${ mixins.contained() } position: fixed;
	background: ${ mixins.transparent(0.5) };
`;

const Overlay = styled.div`
	${ mixins.contained() };
	${ ({ open, }) => open || true ? mixins.shadow(1) : "" };
	transition: 0.3s all ease-out;
	background-color: ${ props => props.theme.colors.bg };
`;

const BurgerWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 1;
`;

// -----------------------------


// -----------------------------

const Line = styled.div`
	${ mixins.xs`
		display: none;
	` };
	height: 1.5px;
	background: white;
	position: absolute;
	left: 0;
	right: 0;
	bottom: ${ props => props.theme.dimensions.nav.linksHeight };
	display: none;
`;

const BackgroundColorHack = styled.div`
	${ mixins.xs`
		display: none;
	` };
	background-color: ${ props => props.theme.colors.bg };
	position: fixed;
	left: 0;
	right: 0;
	height: ${ mixins.num(vars.dim.nav.height.other) -
		mixins.num(vars.dim.nav.linksHeight) }px;
	top: 0;
`;

// --------------------------------------------------

const enhance = compose(
	withState("open", "setOpen", false),
	withHandlers({
		openMenu: ({ setOpen, }) => () => setOpen(true),
		closeMenu: ({ setOpen, }) => () => setOpen(false),
		toggleMenu: ({ setOpen, open, }) => () => setOpen(!open),
	}),
);

const Nav = ({ links, ...props, }) => (
	<Wrapper>
		<Inner>
			<MobileStuff>
				<Fade visible = { props.open }>
					<Dark onClick = { props.closeMenu } />
				</Fade>
			</MobileStuff>

			<BackgroundColorHack />

			<Links close = { props.closeMenu } open = { props.open } links = { links }/>

			<MobileStuff>
				<Overlay open = { props.open } />

				<BurgerWrapper onClick = { props.toggleMenu }>
					<Burger
						open = { props.open }
						padding = { mixins.num(vars.dim.nav.margin.xs) }
						color = { vars.colors.nav }
					/>
				</BurgerWrapper>
			</MobileStuff>

			<Logo />
		</Inner>

		<Line />
	</Wrapper>
);

export default enhance(Nav);
