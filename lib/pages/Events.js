"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactRouterDom = require("react-router-dom");

var _toolbox = require("src/components/common/toolbox");

var _vars = require("src/components/style/vars");

var vars = _interopRequireWildcard(_vars);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _Head = require("src/components/common/Head");

var _Head2 = _interopRequireDefault(_Head);

var _data = require("src/data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var EventTable = _styledComponents2.default.table.withConfig({
	displayName: "Events__EventTable"
})(["border-collapse:collapse;width:100%;font-size:0.7em;thead{border-bottom:", " 2px solid;}thead td{font-size:1.1em;}tr{border-bottom:", " 1px solid;}tr:hover,tr:active{cursor:pointer;background-color:", ";}td{padding:0.5em 0.25em 0;}a{display:block;}"], vars.colors.grey, vars.colors.grey, vars.colors.bgdark);

// --------------------------------------------------

var Event = function Event(_ref) {
	var condensed = _ref.condensed,
	    event = (0, _objectWithoutProperties3.default)(_ref, ["condensed"]);

	var Cell = function Cell(_ref2) {
		var children = _ref2.children;
		return React.createElement(
			"td",
			null,
			React.createElement(
				_reactRouterDom.Link,
				{ to: "/events/" + event.slug },
				children
			)
		);
	};

	return React.createElement(
		"tr",
		null,
		React.createElement(
			Cell,
			null,
			event.name
		),
		React.createElement(
			Cell,
			null,
			event.role
		),
		React.createElement(
			Cell,
			null,
			event.location
		),
		React.createElement(
			Cell,
			null,
			(0, _moment2.default)(event.date).format("Do MMMM YYYY")
		)
	);
};

Event.displayName = "Event";
var orderEvents = function orderEvents(events, future) {
	return events.sort(function (a, b) {
		return (0, _moment2.default)(a.date).diff((0, _moment2.default)(b.date));
	}).filter(function (event) {
		return future ? (0, _moment2.default)(event.date).diff((0, _moment2.default)()) >= 0 : (0, _moment2.default)(event.date).diff((0, _moment2.default)()) < 0;
	});
};

var pastEvents = orderEvents(_data2.default.events, false, true);
var upcomingEvents = orderEvents(_data2.default.events, true, false);

var PastEvents = pastEvents.map(function (event) {
	return React.createElement(Event, (0, _extends3.default)({}, event, { condensed: true }));
});
var UpcomingEvents = upcomingEvents.map(function (event) {
	return React.createElement(Event, event);
});

var Events = function Events() {
	return React.createElement(
		_toolbox.PageWrapper,
		null,
		React.createElement(_Head2.default, { pageData: _data2.default.pagesMap.events }),
		React.createElement(
			_toolbox.Container,
			null,
			React.createElement(
				_toolbox.TextCell,
				null,
				React.createElement(
					_toolbox.PageBody,
					null,
					React.createElement(
						"h1",
						null,
						_data2.default.pagesMap.events.title
					),
					React.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: _data2.default.pagesMap.events.html
						}
					}),
					upcomingEvents.length ? React.createElement(
						"div",
						null,
						React.createElement(
							"h2",
							null,
							"Upcoming events"
						),
						React.createElement(
							EventTable,
							null,
							React.createElement(
								"thead",
								null,
								React.createElement(
									"td",
									null,
									"Event"
								),
								React.createElement(
									"td",
									null,
									"Role"
								),
								React.createElement(
									"td",
									null,
									"Where"
								),
								React.createElement(
									"td",
									null,
									"When"
								)
							),
							UpcomingEvents
						)
					) : null,
					pastEvents.length ? React.createElement(
						"div",
						null,
						React.createElement(
							"h2",
							null,
							"Past events"
						),
						React.createElement(
							EventTable,
							null,
							React.createElement(
								"thead",
								null,
								React.createElement(
									"td",
									null,
									"Event"
								),
								React.createElement(
									"td",
									null,
									"Role"
								),
								React.createElement(
									"td",
									null,
									"Where"
								),
								React.createElement(
									"td",
									null,
									"When"
								)
							),
							PastEvents
						)
					) : null
				)
			)
		)
	);
};

Events.displayName = "Events";
exports.default = Events;