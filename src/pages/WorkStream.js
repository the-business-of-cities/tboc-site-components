import { Boxes, } from "src/components/common/toolbox";

import Generic from "./Generic";

// --------------------------------------------------

const Comp = props => (
	<Generic { ...props }>
		<Boxes />
	</Generic>
);

export default Comp;
