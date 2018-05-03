import {
	PageWrapper,
	PageBody,
	Container,
	TextCell,
} from "src/components/common/toolbox";

// ----------------------

export const errorPage = () => (
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
