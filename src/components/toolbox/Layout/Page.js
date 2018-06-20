import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";

// --------------------------------------------------

const Page = styled.div`
	display: flex;

	${ mixins.bp.sm.max`
		display: flex;
	` };
`;

export { Page, };