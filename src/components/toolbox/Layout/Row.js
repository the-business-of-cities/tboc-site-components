import * as mixins from "codogo-utility-functions";

import styled from "styled-components";

// --------------------------------------------------

// --------------------------------------------------

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-bottom: 1em;
	width: 100%;
	align-items: center;

	${ props => props.reverse && "flex-direction: row-reverse" };

	${ mixins.bp.sm.max`
		flex-wrap: wrap;
	` };
`;

export { Row, };