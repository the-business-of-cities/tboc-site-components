import {
	Page, Section, Container, Row, Column, SecondaryImage,
} from "../components/toolbox";

import marked from "marked";
import React from "react";

// --------------------------------------------------

// --------------------------------------------------

export const Generic = ({ title, secondaryImage, description, content, }) => (
	<Page>
		<Section>
			<Container>
				<Row>
					<Column>
						<h1>{ title }</h1>
					</Column>
				</Row>

				<Row>
					<Column>
						{
							secondaryImage && 
							(
								<SecondaryImage src = { secondaryImage.file.url } />
							)
						}

						<div><em>{ description }</em></div>

						<div
							dangerouslySetInnerHTML = { {
								__html: marked(
									content,
								),
							} }
						/>
					</Column>
				</Row>
			</Container>
		</Section>
	</Page>
);


