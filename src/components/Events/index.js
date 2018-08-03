import {
	Section,
	Container,
	Column,
	Row,
	MaybeLink,
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
		border-bottom: ${ props => props.theme.colors.grey } 2px solid;
	}

	thead td {
		font-size: 1.1em;
	}

	tr {
		border-bottom: ${ props => props.theme.colors.grey } 1px solid;
	}

	tr:hover,
	tr:active {
		cursor: pointer;
		background-color: ${ props => props.theme.colors.background.medium };
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
			<MaybeLink to = { event.link || `/events/${ slugify(event.title, { lower: true, } ) }` }>{children}</MaybeLink>
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

Event.propTypes = {
	event: PropTypes.object,
};

// --------------------------------------------------

const Events = ({ events, }) => {
	events.sort((a, b) => {
		return Moment(a.node.date).diff(Moment(b.node.date)) < 0 ? 1 : -1;
	});

	const pastEvents = events.filter(
		event => Moment(event.node.date).diff(Moment()) < 0
	).map(event => (
		<Event { ...event.node } key = { `${ slugify(event.node.title, { lower: true, } ) }-${ event.node.date }` } condensed />
	) );

	const upcomingEvents = events.filter(
		event => Moment(event.node.date).diff(Moment()) >= 0
	)
	.reverse()
	.map(event => (
		<Event { ...event.node } key = { `${ slugify(event.node.title, { lower: true, } ) }-${ event.node.date }` } />
	) );

	return (
		<Section>
			<Container narrow>
				{
					upcomingEvents &&
					<Row>
						<Column>
							<h2>Upcoming events</h2>

							<EventTable>
								<tbody>
									<tr>
										<th>Event</th>

										<th>Role</th>

										<th>Where</th>

										<th>When</th>
									</tr>

									{ upcomingEvents }
								</tbody>
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
								<tbody>
									<tr>
										<th>Event</th>

										<th>Role</th>

										<th>Where</th>

										<th>When</th>
									</tr>

									{ pastEvents }
								</tbody>
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
