import * as mixins from "codogo-utility-functions";

import styled, { css, } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const MaybeLink = ( { children, className, href, target, theme, to, GatsbyLink, }, ) => {
	console.log(GatsbyLink);
	return to && GatsbyLink ? (
		<GatsbyLink
			to = { to }
			children = { children }
			className = { className }
		></GatsbyLink>
	) : (
		<a
			href = { href }
			children = { children }
			target = { target }
			className = { className }
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
	GatsbyLink: PropTypes.any,
};

export { MaybeLink, };
