import { LogoGrid, } from "../components/toolbox";

import styled from "styled-components";
import Generic from "./Generic";

import React from "react";

// --------------------------------------------------

const CategoryWrapper = styled.div`
	margin-bottom: 1em;
`;

// --------------------------------------------------

export const Partners = props => (
	<Generic { ...props }>
		{props.partnerCategories.map(cat => (
			<CategoryWrapper key = { cat.title }>
				<h2>{cat.title}</h2>

				<LogoGrid
					logos = { cat.partner.map(partner => ({
						image: partner.fields.image,
						link: partner.fields.website,
					})) }
				/>
			</CategoryWrapper>
		))}
	</Generic>
);