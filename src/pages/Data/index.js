import styled from "styled-components";

import { Container, } from "../../components/toolbox";

import React from "react";

// --------------------------------------------------

const Wrapper = styled(Container)`
	white-space: pre-wrap;
	word-wrap: break-word;
	font-size: 11px;
	font-family: monospace;
`;

export default data => () => <Wrapper>{console.log(data)}</Wrapper>;
