import { Fade, } from "../toolbox";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import * as mixins from "codogo-utility-functions";
import * as vars from "src/components/style/vars";
import { objMap, } from "src/lib/util";

import Links from "./Links";
import Burger from "./Burger";
import styled from "styled-components";

import Data from "src/data";

// --------------------------------------------------

const Wrapper = styled.nav`
	${ mixins.bp.xs.min`${ mixins.shadow(0) }` } 
	${ mixins.bpEither("height", vars.dim.nav.height) }
	background-color: ${ R.path([ "theme", "nav", ]) };
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 10;
	color: white;

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
	${ mixins.bp.sm.min`display: none;` } ${ mixins.contained() };
`;

const Dark = styled.div`
	${ mixins.contained() } position: fixed;
	background: ${ mixins.transparent(0.5) };
`;

const Overlay = styled.div`
	${ mixins.contained() } ${ ({ open, }) =>
	open || true ? mixins.shadow(1) : "" } transition: 0.3s all ease-out;
	background-color: ${ R.path([ "theme", "bg", ]) };
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

const IndexLink = props => <Link to = "/" { ...props } />;

const LogoWrapper = styled(IndexLink)`
	position: absolute;
	top: 0;
	${ mixins.bpEither("left", vars.dim.nav.margin) } display: flex;
	flex-direction: row;
	align-items: center;

	${ mixins.xs`
		bottom: 0;
	` } ${ mixins.bp.sm.min`
		bottom: ${ vars.dim.nav.linksHeight };
	` };
`;

const LogoText = styled.div`
	font-size: 2em;
	font-family: ${ vars.font.title.family };
	text-transform: uppercase;
`;

const LogoImage = styled.img`
	height: 80%;
	width: auto;
`;

const Logo = props => (
	<LogoWrapper to = "/">
		{Data.logo ? (
			<LogoImage src = { Data.logo.url } />
		) : (
			<LogoText>The Business of Cities</LogoText>
		)}
	</LogoWrapper>
);

const Line = styled.div`
	${ mixins.xs`
		display: none;
	` } height: 1.5px;
	background: white;
	position: absolute;
	left: 0;
	right: 0;
	bottom: ${ vars.dim.nav.linksHeight };
	display: none;
`;

const BackgroundColorHack = styled.div`
	${ mixins.xs`
		display: none;
	` }
	background-color: ${ R.path([ "theme", "bg", ]) };
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

const Nav = ({ open, closeMenu, toggleMenu, }) => (
	<Wrapper>
		<Inner>
			<MobileStuff>
				<Fade visible = { open }>
					<Dark onClick = { closeMenu } />
				</Fade>
			</MobileStuff>

			<BackgroundColorHack />

			<Links close = { closeMenu } open = { open } />

			<MobileStuff>
				<Overlay open = { open } />

				<BurgerWrapper onClick = { toggleMenu }>
					<Burger
						open = { open }
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
