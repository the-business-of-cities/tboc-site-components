import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-bottom: 1em;
	width: 100%;

	${ props => props.reverse && "flex-direction: row-reverse" };

	${ mixins.bp.sm.max`
		flex-wrap: wrap;
	` };
`;

export { Row, };