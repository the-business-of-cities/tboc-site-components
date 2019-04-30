import * as mixins from "codogo-utility-functions";

import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { theme, } from "../../styles";
import { Link, } from "gatsby";

// --------------------------------------------------

const LogoWrapper = styled.div`
	background: white;
	bottom: 0;
	display: flex;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	align-items: center;
	justify-content: center;

	${ mixins.bp.sm.min`
		bottom: ${ props => props.theme.dimensions.nav.linksHeight };
	` };
`;

const LogoContainer = styled.div`
	display: flex;
	width: 100%;	
	height: 100%;
	max-width: ${ props => props.theme.breakpoints.lg.min }px;
	padding: 0 ${ props => props.theme.dimensions.nav.margin.xs };
`;

const IndexLink = props => <Link to = "/" { ...props } />;

const LogoLink = styled(IndexLink)`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;
`;

const LogoText = styled.div`
	font-size: 2em;
	font-family: ${ props => props.theme.font.title.family };
	text-transform: uppercase;
`;

const LogoImage = styled.img`
	height: 80%;
	width: auto;
	object-fit: contain;
	object-position: left;
`;

// --------------------------------------------------

const Logo = ( { logo, }, ) => (
	<LogoWrapper>
		<LogoContainer>
			<LogoLink to = "/">
				{ logo.url ? (
					<LogoImage src = {  logo.url } />
				) : (
					<LogoText>{  logo.text }</LogoText>
				)}
			</LogoLink>
		</LogoContainer>
	</LogoWrapper>
);

Logo.propTypes = {
	logo: PropTypes.shape({
		url: PropTypes.string,
		text: PropTypes.string,
	}),
};

export default Logo;