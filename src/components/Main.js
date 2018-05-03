import styled from "styled-components";

import * as mixins from "codogo-utility-functions";
import * as vars from "src/components/style/vars";
import { objMap, } from "src/lib/util";

// --------------------------------------------------

export default styled.div`
	${ mixins.bpEither("margin-top", vars.dim.nav.height) }
	background-color: ${ R.path([ "theme", "body", ]) };
`;
