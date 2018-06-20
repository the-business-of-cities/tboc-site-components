import { Boxes, } from "../components/toolbox";

import Generic from "./Generic";

import React from "react";

// --------------------------------------------------

export const WorkStream = props => (
	<Generic { ...props }>
		<Boxes />
	</Generic>
);