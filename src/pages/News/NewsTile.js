import { Link, } from "react-router-dom";
import {
	SmartImg,
	TileWrapper,
	TileInner,
	TileTitle,
	TileImage,
	TileContent,
} from "../../components/toolbox";

import React from "react";

// --------------------------------------------------

const NewsTile = ({ image, title, link, description, slug, }) => (
	<TileWrapper className = "masonry-item">
		<TileInner>
			<Link to = { link ? link : "/blog/" + slug }>
				<TileImage>
					<SmartImg { ...image } />
				</TileImage>
			</Link>

			<TileContent>
				<Link to = { link ? link : "/blog/" + slug }>
					<TileTitle>{title}</TileTitle>
				</Link>

				<p>{description}</p>
			</TileContent>
		</TileInner>
	</TileWrapper>
);

export default NewsTile;
