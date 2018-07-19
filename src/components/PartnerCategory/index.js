import LogoGrid from "../LogoGrid";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// --------------------------------------------------

const CategoryWrapper = styled.div`
	margin-bottom: 1em;
	flex: 1;
	width: 100%;
`;

// --------------------------------------------------

const PartnerCategory = ( { category, } ) => {
	return category && (
		<CategoryWrapper>
			<h2>{ category.title }</h2>

			<LogoGrid
				logos = { 
					category.partner.map(partner => ({
						image: partner.image,
						link: partner.website,
					}))
				}
			/>
		</CategoryWrapper>
	);
};

PartnerCategory.propTypes = {
	category: PropTypes.any.isRequired,
};

export default PartnerCategory;