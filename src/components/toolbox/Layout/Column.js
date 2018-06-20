import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

const Column = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	padding: 0.25em;
	flex: 1;

	${ mixins.bp.sm.max`
		flex-basis: 100%;
	` };
`;

export { Column, };