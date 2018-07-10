import { Link, } from "react-router-dom";
import { theme, } from "../../styles";
import {
	Section,
	Container,
	Column,
	Row,
} from "../toolbox";

import Moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import slugify from "slugify";

// --------------------------------------------------

const EventTable = styled.table`
	border-collapse: collapse;
	width: 100%;
	font-size: 0.7em;

	thead {
		border-bottom: ${ theme.colors.grey } 2px solid;
	}

	thead td {
		font-size: 1.1em;
	}

	tr {
		border-bottom: ${ theme.colors.grey } 1px solid;
	}

	tr:hover,
	tr:active {
		cursor: pointer;
		background-color: ${ theme.colors.bg.medium };
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
			<Link to = { `/events/${ slugify(event.title.toLowerCase()) }` }>{children}</Link>
		</td>
	);

	return (
		<tr>
			<Cell>{event.title}</Cell>

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

const Events = ({ events, }) => {
	const pastEvents = orderEvents(events, false, true).map(event => <Event { ...event.node } condensed />);
	const upcomingEvents = orderEvents(events, true, false).map(event => <Event { ...event.node } />);

	return (
		<Section>
			<Container narrow>
				{
					upcomingEvents &&
					<Row>
						<Column>
							<h2>Upcoming events</h2>

							<EventTable>
								<thead>
									<td>Event</td>

									<td>Role</td>

									<td>Where</td>

									<td>When</td>
								</thead>

								{ upcomingEvents }
							</EventTable>
						</Column>
					</Row>
				}

				{
					pastEvents &&
					<Row>
						<Column>
							<h2>Past events</h2>

							<EventTable>
								<thead>
									<td>Event</td>

									<td>Role</td>

									<td>Where</td>

									<td>When</td>
								</thead>

								{ pastEvents }
							</EventTable>
						</Column>
					</Row>
				}
			</Container>
		</Section>
	);
};

Events.propTypes = {
	events: PropTypes.array,
};

export default Events;
