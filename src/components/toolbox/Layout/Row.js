import * as mixins from "codogo-utility-functions";

import styled from "styled-components";

// --------------------------------------------------

// --------------------------------------------------

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
	align-items: center;
	padding: 3em;

	&:not(:last-child) {
		padding-bottom: 1em;
	}

	&:not(:first-child) {
		padding-top: 1em;
	}

	${ props => props.reverse && "flex-direction: row-reverse;" };
	${ props => props.noPadding && "padding: 0 !important;" };

	${ mixins.bp.sm.max`
		flex-wrap: wrap;
	` };
`;

export { Row, };