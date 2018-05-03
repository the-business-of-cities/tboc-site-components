import { LogoGrid, } from "src/components/common/toolbox";

import styled from "styled-components";
import data from "src/data";
import Generic from "./Generic";

// --------------------------------------------------

const CategoryWrapper = styled.div`
	margin-bottom: 1em;
`;

console.log("Data", data);

//const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));

const Partners = props => (
	<Generic { ...props }>
		{data.partnerCategories.map(cat => (
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

export default Partners;
