import * as mixins from "codogo-utility-functions";

import R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import slugify from "slugify";

// --------------------------------------------------

const publicationsPerRow = {
	xs: 2,
	sm: 3,
	md: 4,
	lg: 4,
};

const gridColumns = R.map(n => `repeat(${ n }, 1fr)`)(publicationsPerRow);

const PublicationsWrapper = styled.div`
	display: grid;
	${ mixins.bpEach("grid-template-columns", gridColumns) } grid-gap: 2em;
	margin-bottom: 2em;
`;

const PublicationWrapper = styled.a`
	display: block;
	width: 100%;
`;

const PublicationInner = styled.div`
	width: 100%;
	padding-top: 88%;
	position: relative;
`;

const PublicationImage = styled.div`
	${ mixins.contained() }
	background-image: url(${ R.prop("src") });
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
`;

// --------------------------------------------------

const Publications = ( props ) => {
	return (
		<PublicationsWrapper>
			{
				(props.publications || []).map( publication => (
					<PublicationWrapper key = { slugify( publication.node.title.toLowerCase() ) } href = { `/publications/${ slugify( publication.node.title.toLowerCase() ) }` }>
						<PublicationInner>
							<PublicationImage
								src = { `http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ publication.node.image &&
									publication.node.image.file.url }` }
							/>

							<div>{ publication.node.title }</div>
						</PublicationInner>
					</PublicationWrapper>
				) )
			}
		</PublicationsWrapper>
	);
};

Publications.propTypes = {
	publications: PropTypes.array.isRequired,
};

export default Publications;
