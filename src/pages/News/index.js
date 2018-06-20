import masonry from "masonry-layout";
import { lifecycle, } from "recompose";

import {
	Container,
	TextCell,
	PageWrapper,
	PageBody,
	TilesWrapper,
} from "../../components/toolbox";

import NewsTile from "./NewsTile";
import React from "react";

// --------------------------------------------------

const doMasonry = () => {
	setTimeout(() => {
		const masonryInstance = new masonry(".masonry-items", {
			itemSelector: ".masonry-item",
			percentPosition: true,
		});
	}, 500);
};

const enhance = lifecycle({
	componentDidMount() {
		doMasonry();
	},
});

// --------------------------------------------------

const News = ( { title, html, news, } ) => (
	<PageWrapper>
		<Container>
			<TextCell>
				<PageBody>
					<h1>{title}</h1>

					<div
						dangerouslySetInnerHTML = { {
							__html: html,
						} }
					/>

					<h2>Recent Posts</h2>

					<TilesWrapper className = "masonry-items">
						{ news.map((props, i) => (
							<NewsTile { ...props } key = { props.slug + i } />
						))}
					</TilesWrapper>
				</PageBody>
			</TextCell>
		</Container>
	</PageWrapper>
);

export const NewsPage = enhance(News);
