import * as mixins from "codogo-utility-functions";

import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import Link from "gatsby-link";

// --------------------------------------------------

const IndexLink = props => <Link to = "/" { ...props } />;

const LogoWrapper = styled(IndexLink)`
	position: absolute;
	top: 0;
	${ props => mixins.bpEither("left", props.theme.dimensions.nav.margin ) };
	display: flex;
	flex-direction: row;
	align-items: center;

	${ mixins.xs`
		bottom: 0;
	` };
	${ mixins.bp.sm.min`
		bottom: ${ props => props.theme.dimensions.nav.linksHeight };
	` };
`;

const LogoText = styled.div`
	font-size: 2em;
	font-family: ${ props => props.theme.font.title.family };
	text-transform: uppercase;
`;

const LogoImage = styled.img`
	height: 80%;
	width: auto;
`;

// --------------------------------------------------

const Logo = ( { logo, }, ) => (
	<LogoWrapper to = "/">
		{ logo.url ? (
			<LogoImage src = {  logo.url } />
		) : (
			<LogoText>{  logo.text }</LogoText>
		)}
	</LogoWrapper>
);

Logo.propTypes = {
	logo: PropTypes.shape({
		url: PropTypes.string,
		text: PropTypes.string,
	}),
};

export default Logo;