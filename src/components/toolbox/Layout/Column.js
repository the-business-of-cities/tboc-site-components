import * as mixins from "codogo-utility-functions";

import styled from "styled-components";

// --------------------------------------------------

// --------------------------------------------------

const Column = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	padding: 3em;
	flex: 1;

	${ mixins.bp.sm.max`
		flex-basis: 100%;
		padding: 1em;
	` };
`;

export { Column, };