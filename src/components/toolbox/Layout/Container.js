import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { MaybeLink, } from "../Links";
import { Icon, } from "../Links";

// --------------------------------------------------

// --------------------------------------------------

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;

	${ props => props.restrict && "max-width: 1000px" };

	${ props => props.narrow && "max-width: 750px" };

	${ mixins.bp.sm.max`
		flex-basis: 100%;
	` };
`;

export { Container, };