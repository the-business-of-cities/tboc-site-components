import * as mixins from "codogo-utility-functions";

import styled from "styled-components";

// --------------------------------------------------

// --------------------------------------------------

const Column = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	flex: 1;

	&:not(:last-child) {
		padding-left: 0.5em;
	}

	&:not(:first-child) {
		padding-right: 0.5em;
	}

	${ mixins.bp.sm.max`
		flex-basis: 100%;
		padding: 1em;
	` };

	> img {
		padding: 2em;
	}

	${ props => props.center && "align-items: center; text-align: center;" };
`;

export { Column, };