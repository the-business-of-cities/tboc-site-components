import {
	PageWrapper,
	PageBody,
	Container,
	TextCell,
} from "../components/toolbox";

import React from "react";

// ----------------------

export const ErrorPage = () => (
	<PageWrapper>
		<Container>
			<TextCell>
				<PageBody>
					<h1>404</h1>

					<p>Whoops, this page doesn't exist.</p>
				</PageBody>
			</TextCell>
		</Container>
	</PageWrapper>
);