import masonry from "masonry-layout";
import { lifecycle, } from "recompose";

import Data from "src/data";
import {
	Container,
	TextCell,
	PageWrapper,
	PageBody,
	TilesWrapper,
} from "src/components/common/toolbox";

import Head from "src/components/common/Head";

import NewsTile from "./NewsTile";

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

const Publications = () => (
	<PageWrapper>
		<Head pageData = { Data.pagesMap.blog } />

		<Container>
			<TextCell>
				<PageBody>
					<h1>{Data.pagesMap.blog.title}</h1>

					<div
						dangerouslySetInnerHTML = { {
							__html: Data.pagesMap.blog.html,
						} }
					/>

					<h2>Recent Posts</h2>

					<TilesWrapper className = "masonry-items">
						{Data.news.map((props, i) => (
							<NewsTile { ...props } key = { props.slug + i } />
						))}
					</TilesWrapper>
				</PageBody>
			</TextCell>
		</Container>
	</PageWrapper>
);

export default enhance(Publications);
