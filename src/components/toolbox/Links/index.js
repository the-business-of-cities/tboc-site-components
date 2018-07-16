import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import Link from "gatsby-link";

// --------------------------------------------------

const MaybeLink = (props) => {
	return props.to ? (
		<Link
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
};

export { MaybeLink, };
