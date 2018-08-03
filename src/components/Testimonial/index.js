import * as mixins from "codogo-utility-functions";
import { Section, Column, Row, Container, } from "../toolbox";

import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import marked from "marked";

// --------------------------------------------------

// --------------------------------------------------

const Testimonial = ( { testimonial, }) => {
	return testimonial && (
		<Section>
			<Container>
				<Row>
					<Column>
						{ testimonial.quote.quote && 
							<div
								dangerouslySetInnerHTML = { {
									__html: marked(
										testimonial.quote.quote,
									),
								} }
							/> 
						}

						{ testimonial.quotee }
					</Column>
				</Row>
			</Container>
		</Section>
	);
};

Testimonial.propTypes = {
	testimonial: PropTypes.object,
};

export default Testimonial;
