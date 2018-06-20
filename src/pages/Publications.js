import {
	PageWrapper,
	PageBody,
	Container,
	TextCell,
	GridCell,
	AntiGridCell,
	SmartImg,
} from "../components/toolbox";
import { lifecycle, } from "recompose";
import * as mixins from "codogo-utility-functions";
import * as vars from "../style/vars";

import styled from "styled-components";
import masonry from "masonry-layout";
import Head from "../components/Head";

import React from "react";

// --------------------------------------------------

const PubsWrapper = styled(AntiGridCell)`
	${ mixins.bp.sm.min`margin: 0;` };
`;

const borderWidth = 2;

const PubWrapper = styled(GridCell)`
	width: calc(50% + ${ borderWidth }px);
	${ mixins.bp.sm.max`width: calc(50% + ${ borderWidth }px);` }
	border: ${ borderWidth }px solid ${ vars.colors.bgdark };
	margin: -${ borderWidth * 0.5 }px;
	padding: 0;
	padding-bottom: 0;
`;

const PubText = styled.div`
	font-size: 0.8em;
`;

const PubTitle = styled.h3`
	margin-bottom: 0;
`;

const doMasonry = () => {
	setTimeout(() => {
		const masonryInstance = new masonry(".masonry-items", {
			itemSelector: ".masonry-item",
			percentPosition: true,
		});
		// const imagesloadedInstance = new imagesloaded(
		// 	".masonry-items",
		// 	() => masonryInstance.layout()
		// );
	}, 1000);
};

const enhance = lifecycle({
	componentDidMount() {
		doMasonry();
	},
});

const PublicationTile = ({ image, title, link, description, }) => (
	<a href = { link }>
		<PubWrapper className = "masonry-item">
			<GridCell>
				<SmartImg { ...image } unlimitedHeight />
				<PubText>
					<PubTitle>{title}</PubTitle>
					<div
						dangerouslySetInnerHTML = { {
							__html: description,
						} }
					/>
				</PubText>
			</GridCell>
		</PubWrapper>
	</a>
);

const Publications = ({ data, }) => (
	<PageWrapper>
		<Head pageData = { data.pagesMap.publications } />

		<Container>
			<TextCell>
				<PageBody>
					<h1>{data.pagesMap.publications.title}</h1>

					<div
						dangerouslySetInnerHTML = { {
							__html: data.pagesMap.publications.html,
						} }
					/>

					<h2>Recent Publications</h2>

					<PubsWrapper className = "masonry-items">
						{data.publications.map((props, i) => (
							<PublicationTile { ...props } key = { props.slug + i } />
						))}
					</PubsWrapper>
				</PageBody>
			</TextCell>
		</Container>
	</PageWrapper>
);

export const PublicationPage =  enhance(Publications);
