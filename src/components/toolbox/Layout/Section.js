import * as mixins from "codogo-utility-functions";

import styled from "styled-components";

// --------------------------------------------------

const Section = styled.div`
	align-items: center;
	background-color: ${ props => props.theme.colors.background.white };
	display: flex;
	flex-basis: 100%;
	flex-direction: row;
	justify-content: center;
	width: 100%;
	background-image: ${ props => props.image && `url(http://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto,o_20/https:${ props.image })` };
	background-size: cover;

	&:nth-child(2n) {
		background-color: ${ props => props.theme.colors.background.lighter };
	}

	${ mixins.bp.sm.max`
		flex-wrap: wrap;
	` };
`;

export { Section, };