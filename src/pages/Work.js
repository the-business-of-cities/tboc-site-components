import { Link, } from "react-router-dom";

import { TileWrapper, Icon, AntiGridCell, } from "src/components/common/toolbox";

import styled from "styled-components";
import * as mixins from "codogo-utility-functions";
import Generic from "./Generic";
import routesConfig from "src/routesConfig";

// --------------------------------------------------

const ThirdsWrapper = styled(AntiGridCell)`
	display: flex;
	flex-wrap: wrap;
	margin-top: 3em;

	> div {
		flex-basis: 33.33%;
		${ mixins.xs`flex-basis: 100%` };
		font-size: 0.9em;

		a {
			&,
			&:hover,
			&:visited,
			&:active {
				font-weight: bold;
			}
		}
	}
`;

const ArrowIcon = () => (
	<Icon type = "arrow-right" size = "0.9em" marginLeft = "0.1em" />
);

const Comp = props => (
	<Generic { ...props }>
		<ThirdsWrapper>
			{routesConfig.filter(R.prop("service")).map(page => (
				<TileWrapper>
					<h3>{page.title}</h3>

					<p>{page.description}</p>

					<p>
						<Link to = { page.slug }>
							Find out more <ArrowIcon />
						</Link>
					</p>
				</TileWrapper>
			))}
		</ThirdsWrapper>
	</Generic>
);

export default Comp;
