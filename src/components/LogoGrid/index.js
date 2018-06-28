import * as mixins from "codogo-utility-functions";

import R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// --------------------------------------------------


/*
	Usage
	<LogoGrid
		logos = { cat.partner.map(partner => ({
			image: partner.fields.image,
			link: partner.fields.website,
		})) }
	/>
*/

const logosPerRow = {
	xs: 3,
	sm: 4,
	md: 5,
	lg: 5,
};

const gridColumns = R.map(n => `repeat(${ n }, 1fr)`)(logosPerRow);

const LogoGridWrapper = styled.div`
	display: grid;
	${ mixins.bpEach("grid-template-columns", gridColumns) } grid-gap: 2em;
	margin-bottom: 2em;
`;

const LogoWrapper = styled.a`
	display: block;
	width: 100%;
`;

const LogoInner = styled.div`
	width: 100%;
	padding-top: 88%;
	position: relative;
`;

const LogoImage = styled.div`
	${ mixins.contained() }
	background-image: url(${ R.prop("src") });
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
`;

// --------------------------------------------------

const LogoGrid = ({ logos, }) => (
	<LogoGridWrapper>
		{
			(logos || []).map( ( { image, link, } ) => (
				<LogoWrapper key = { `logo-${ image.url }` } href = { link }>
					<LogoInner>
						<LogoImage
							src = { `http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ (image &&
								image.url) ||
								image.fields.file.url }` }
						/>
					</LogoInner>
				</LogoWrapper>
			) )
		}
	</LogoGridWrapper>
);

LogoGrid.propTypes = {
	logos: PropTypes.object,
};

export { LogoGrid, };
