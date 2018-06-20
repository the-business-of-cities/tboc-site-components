import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const Section = styled.div`
	align-items: center;
	background-color: $background-white;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 1em 0;
	width: 100%;
	flex-basis: 100%;

	${ mixins.bp.sm.max`
		flex-wrap: wrap;
		padding: 1em;
	` };
`;

export { Section, };