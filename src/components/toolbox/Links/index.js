import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const MaybeLink = (props) => {
	return props.to ? (
		<div
			as= { props.gatsbyLink }
			to = { props.to }
			children = { props.children }
			className = { props.className }
		/>
	) : (
		<a
			href = { props.href }
			children = { props.children }
			target = { props.target }
			className = { props.className }
		/>
	);
};

MaybeLink.propTypes = {
	children: PropTypes.any,
	className: PropTypes.any,
	href: PropTypes.any,
	target: PropTypes.any,
	theme: PropTypes.object,
	to: PropTypes.any,
	gatsbyLink: PropTypes.any,
};

export { MaybeLink, };
