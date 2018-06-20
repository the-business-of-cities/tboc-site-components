import {
	PageWrapper,
	PageBody,
	Container,
	TextCell,
} from "../components/toolbox";

import styled from "styled-components";
import Moment from "moment";

import React from "react";

// --------------------------------------------------

const EventDate = styled.div`
	font-size: 0.8em;
	opacity: 0.9;
`;

const EventRole = styled.div`
	font-size: 0.8em;
	opacity: 0.9;
	margin-bottom: 0.5em;
`;

// --------------------------------------------------

export const Event = ({ event, }) => (
	<PageWrapper>
		<Container>
			<TextCell>
				<PageBody>
					<h1>{event.name}</h1>

					<EventDate>
						{Moment(event.date).format("Do MMMM YYYY")},{" "}
						{event.location}
					</EventDate>

					<EventRole>{event.role}</EventRole>

					<p>{event.content}</p>
				</PageBody>
			</TextCell>
		</Container>
	</PageWrapper>
);

export default Event;
