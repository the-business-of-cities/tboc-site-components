import * as mixins from "codogo-utility-functions";

import styled from "styled-components";

// --------------------------------------------------

const Page = styled.div`
	display: flex;
	margin: 0;
	padding: 0;
	flex-direction: column;

	${ mixins.bp.sm.max`
		display: flex;
	` };
`;

export { Page, };