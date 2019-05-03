import { MaybeLink, } from "../toolbox";

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const EntryWrapperLink = styled(MaybeLink)`
	display: flex;
	width: 100%;
	position: relative;
	overflow: hidden;
`;

const EntryWrapper = ( { children, externalUrl, internalUrl, GatsbyLink } ) => {
	return (
		externalUrl ?
			<EntryWrapperLink 
				href = { externalUrl }
			>
				{children}
			</EntryWrapperLink> :
			<EntryWrapperLink 
				GatsbyLink = { GatsbyLink }
				to = { internalUrl }
			>
				{children}
			</EntryWrapperLink>
	);
};

EntryWrapper.propTypes = {
	children: PropTypes.array,
	externalUrl: PropTypes.string,
	internalUrl: PropTypes.string,
	GatsbyLink: PropTypes.any,
};

export default EntryWrapper;