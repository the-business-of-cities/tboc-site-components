import * as mixins from "codogo-utility-functions";

import R from "ramda";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import slugify from "slugify";

// --------------------------------------------------

const newsw = {
	xs: 2,
	sm: 3,
	md: 4,
	lg: 4,
};

const gridColumns = R.map(n => `repeat(${ n }, 1fr)`)(newsw);

const NewsWrapper = styled.div`
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

const News = ( props ) => {
	return (
		<NewsWrapper>
			{
				props.news.map( news => (
					<PublicationWrapper key = { slugify( news.node.title.toLowerCase() ) } href = { `/news/${ slugify( news.node.title.toLowerCase() ) }` }>
						<PublicationInner>
							<PublicationImage
								src = { `http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ news.node.image &&
									news.node.image.file.url }` }
							/>

							<div>{ news.node.title }</div>
						</PublicationInner>
					</PublicationWrapper>
				) )
			}
		</NewsWrapper>
	);
};

News.propTypes = {
	news: PropTypes.array.isRequired,
};

export default News;
