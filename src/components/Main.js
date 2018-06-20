import styled from "styled-components";

import * as mixins from "codogo-utility-functions";
import * as vars from "../style/vars";
import R from "ramda";

import React from "react";

// --------------------------------------------------

export default styled.div`
	${ mixins.bpEither("margin-top", vars.dim.nav.height) }
	background-color: ${ R.path([ "theme", "body", ]) };
`;
