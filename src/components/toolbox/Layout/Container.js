import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { MaybeLink, } from "../Links";
import { Icon, } from "../Links";

// --------------------------------------------------
// const PageWrapper = styled.div`
// 	position: relative;
// 	overflow: hidden;

// 	${ mixins.xs`
// 		& > ${ Container } {
// 			padding-left: 0;
// 			padding-right: 0;

// 		}
// 	` };
// `;

// const PageBody = styled.div`
// 	background: ${ theme.colors.bg };
// 	margin-bottom: 3em;
// 	padding: 2.5em;
// 	padding-top: 1.5em;

// 	${ mixins.xs` padding: 1.8em; ` } h1 {
// 		background: ${ theme.colors.bg };
// 		padding: 0;
// 		position: relative;
// 		z-index: 1;
// 		margin-top: 0;
// 	}
// `;

// const Container = styled.div`
// 	${ mixins.bpEach("padding", theme.dimensions.gutter.container) };
// 	${ p =>
// 		p.fullWidth
// 			? ""
// 			: `max-width: ${ p.maxWidth || theme.dimensions.maxTextWidth }px` };
// 	margin: auto;
// 	${ p => (p.rel ? "position: relative" : "") };
// 	${ p => (p.border ? `border-bottom: 1px solid ${ theme.colors.lines }` : "") };
// 	${ p => (p.center ? "text-align: center;" : "") };
// `;


// --------------------------------------------------

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	max-width: $max-width;
	padding: 0.5em 1em 0 1em;
	width: 100%;

	${ mixins.bp.sm.max`
		flex-basis: 100%;
	` };
`;

export { Container, };