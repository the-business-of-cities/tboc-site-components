import {
	PageWrapper,
	PageBody,
	Container,
	TextCell,
} from "src/components/common/toolbox";
import * as mixins from "codogo-utility-functions";

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

const Generic = ( {fullTitle, title, secondaryImage, html, children,}) => (
	<PageWrapper>
		<Container>
			<TextCell>
				<PageBody>
					<h1>{fullTitle || title}</h1>

					{secondaryImage && (
						<ImageWrapper>
							<Image src = { secondaryImage.url } />
						</ImageWrapper>
					)}

					<div
						dangerouslySetInnerHTML = { {
							__html: html,
						} }
					/>

					{children}
				</PageBody>
			</TextCell>
		</Container>
	</PageWrapper>
);

export default Generic;
