import { Link, } from "react-router-dom";

import {
	PageWrapper,
	PageBody,
	Container,
	TextCell,
} from "src/components/common/toolbox";

import * as vars from "src/components/style/vars";

import styled from "styled-components";
import Moment from "moment";
import Head from "src/components/common/Head";
import Data from "src/data";

// --------------------------------------------------

const EventTable = styled.table`
	border-collapse: collapse;
	width: 100%;
	font-size: 0.7em;

	thead {
		border-bottom: ${ vars.colors.grey } 2px solid;
	}

	thead td {
		font-size: 1.1em;
	}

	tr {
		border-bottom: ${ vars.colors.grey } 1px solid;
	}

	tr:hover,
	tr:active {
		cursor: pointer;
		background-color: ${ vars.colors.bgdark };
	}

	td {
		padding: 0.5em 0.25em 0;
	}

	a {
		display: block;
	}
`;

// --------------------------------------------------

const Event = ({ condensed, ...event }) => {
	const Cell = ({ children, }) => (
		<td>
			<Link to = { `/events/${ event.slug }` }>{children}</Link>
		</td>
	);

	return (
		<tr>
			<Cell>{event.name}</Cell>
			<Cell>{event.role}</Cell>
			<Cell>{event.location}</Cell>
			<Cell>{Moment(event.date).format("Do MMMM YYYY")}</Cell>
		</tr>
	);
};

const orderEvents = (events, future) => {
	return events
		.sort((a, b) => {
			return Moment(a.date).diff(Moment(b.date));
		})
		.filter(
			event =>
				future
					? Moment(event.date).diff(Moment()) >= 0
					: Moment(event.date).diff(Moment()) < 0,
		);
};

const pastEvents = orderEvents(Data.events, false, true);
const upcomingEvents = orderEvents(Data.events, true, false);

const PastEvents = pastEvents.map(event => <Event { ...event } condensed />);
const UpcomingEvents = upcomingEvents.map(event => <Event { ...event } />);

const Events = () => (
	<PageWrapper>
		<Head pageData = { Data.pagesMap.events } />

		<Container>
			<TextCell>
				<PageBody>
					<h1>{Data.pagesMap.events.title}</h1>

					<div
						dangerouslySetInnerHTML = { {
							__html: Data.pagesMap.events.html,
						} }
					/>

					{upcomingEvents.length ? (
						<div>
							<h2>Upcoming events</h2>

							<EventTable>
								<thead>
									<td>Event</td>
									<td>Role</td>
									<td>Where</td>
									<td>When</td>
								</thead>

								{UpcomingEvents}
							</EventTable>
						</div>
					) : null}

					{pastEvents.length ? (
						<div>
							<h2>Past events</h2>
							<EventTable>
								<thead>
									<td>Event</td>
									<td>Role</td>
									<td>Where</td>
									<td>When</td>
								</thead>
								{PastEvents}
							</EventTable>
						</div>
					) : null}
				</PageBody>
			</TextCell>
		</Container>
	</PageWrapper>
);

export default Events;
