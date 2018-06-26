import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const Section = styled.div`
	align-items: center;
	background-color: $background-white;
	display: flex;
	flex-basis: 100%;
	flex-direction: row;
	justify-content: center;
	width: 100%;

	${ mixins.bp.sm.max`
		flex-wrap: wrap;
	` };
`;

export { Section, };