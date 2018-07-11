import * as mixins from "codogo-utility-functions";

import R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// --------------------------------------------------

const logosPerRow = {
	xs: 2,
	sm: 3,
	md: 4,
	lg: 4,
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

const LogoGrid = ( { logos, } ) => {
	return logos && (
		<LogoGridWrapper>
			{
				logos.map( ( { image, link, } ) => 
					image && (
						<LogoWrapper key = { `logo-${ image.file.url }` } href = { link }>
							<LogoInner>
								<LogoImage
									src = { `http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ image &&
										image.file.url }` }
								/>
							</LogoInner>
						</LogoWrapper>
					) 
				)
			}
		</LogoGridWrapper>
	);
};

LogoGrid.propTypes = {
	logos: PropTypes.array.isRequired,
};

export default LogoGrid;
