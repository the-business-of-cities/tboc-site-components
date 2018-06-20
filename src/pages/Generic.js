import {
	PageWrapper,
	PageBody,
	Container,
	TextCell,
} from "../components/toolbox";
import * as mixins from "codogo-utility-functions";

import marked from "marked";
import React from "react";
import styled from "styled-components";

// --------------------------------------------------

const ImageWrapper = styled.div`
	img {
		width: 100%;
		max-height: 1em;
	}
`;

const Image = styled.div`
	${ mixins.bgImage };
	padding-top: 15em;

	${ mixins.bp.sm.min`padding-top: 20em;` };
`;
// --------------------------------------------------

export const Generic = ({ title, secondaryImage, description, content, }) => (
	<PageWrapper>
		<Container>
			<TextCell>
				<PageBody>
					<h1>{ title }</h1>

					{secondaryImage && (
						<ImageWrapper>
							<Image src = { secondaryImage.file.url } />
						</ImageWrapper>
					)}

					<div><em>{ description }</em></div>

					<div
						dangerouslySetInnerHTML = { {
							__html: marked(
								content,
							),
						} }
					/>
				</PageBody>
			</TextCell>
		</Container>
	</PageWrapper>
);