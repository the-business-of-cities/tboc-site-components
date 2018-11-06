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

const EntryWrapper = ( props ) => {
	return (
		props.externalUrl ?
			<EntryWrapperLink 
				href = { props.externalUrl }
			>
				{props.children}
			</EntryWrapperLink> :
			<EntryWrapperLink 
				to = { props.internalUrl }
			>
				{props.children}
			</EntryWrapperLink>
	);
};

EntryWrapper.propTypes = {
	children: PropTypes.array,
	externalUrl: PropTypes.string,
	internalUrl: PropTypes.string,
};

export default EntryWrapper