import * as mixins from "codogo-utility-functions";
import { Link, } from "react-router-dom";
import { TileWrapper, Icon, AntiGridCell, } from "../components/toolbox";

import Generic from "./Generic";
import styled from "styled-components";

import React from "react";

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

export const Work = props => (
	<Generic { ...props }>
		<ThirdsWrapper>
			<TileWrapper>
				<h3>{props.title}</h3>

				<p>{props.description}</p>

				<p>
					<Link to = { props.slug }>
						Find out more <ArrowIcon />
					</Link>
				</p>
			</TileWrapper>
		</ThirdsWrapper>
	</Generic>
);
