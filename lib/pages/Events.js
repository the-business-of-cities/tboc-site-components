"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Events = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactRouterDom = require("react-router-dom");

var _toolbox = require("../components/toolbox");

var _vars = require("../style/vars");

var vars = _interopRequireWildcard(_vars);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
		return _react2.default.createElement(
			"td",
			null,
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: "/events/" + event.slug },
				children
			)
		);
	};

	return _react2.default.createElement(
		"tr",
		null,
		_react2.default.createElement(
			Cell,
			null,
			event.name
		),
		_react2.default.createElement(
			Cell,
			null,
			event.role
		),
		_react2.default.createElement(
			Cell,
			null,
			event.location
		),
		_react2.default.createElement(
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

var Events = exports.Events = function Events(_ref3) {
	var title = _ref3.title,
	    html = _ref3.html,
	    events = _ref3.events;

	var pastEvents = orderEvents(events, false, true);
	var upcomingEvents = orderEvents(events, true, false);

	var PastEvents = pastEvents.map(function (event) {
		return _react2.default.createElement(Event, (0, _extends3.default)({}, event, { condensed: true }));
	});
	var UpcomingEvents = upcomingEvents.map(function (event) {
		return _react2.default.createElement(Event, event);
	});

	return _react2.default.createElement(
		_toolbox.PageWrapper,
		null,
		_react2.default.createElement(
			_toolbox.Container,
			null,
			_react2.default.createElement(
				_toolbox.TextCell,
				null,
				_react2.default.createElement(
					_toolbox.PageBody,
					null,
					_react2.default.createElement(
						"h1",
						null,
						title
					),
					_react2.default.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: html
						}
					}),
					upcomingEvents.length ? _react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(
							"h2",
							null,
							"Upcoming events"
						),
						_react2.default.createElement(
							EventTable,
							null,
							_react2.default.createElement(
								"thead",
								null,
								_react2.default.createElement(
									"td",
									null,
									"Event"
								),
								_react2.default.createElement(
									"td",
									null,
									"Role"
								),
								_react2.default.createElement(
									"td",
									null,
									"Where"
								),
								_react2.default.createElement(
									"td",
									null,
									"When"
								)
							),
							UpcomingEvents
						)
					) : null,
					pastEvents.length ? _react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(
							"h2",
							null,
							"Past events"
						),
						_react2.default.createElement(
							EventTable,
							null,
							_react2.default.createElement(
								"thead",
								null,
								_react2.default.createElement(
									"td",
									null,
									"Event"
								),
								_react2.default.createElement(
									"td",
									null,
									"Role"
								),
								_react2.default.createElement(
									"td",
									null,
									"Where"
								),
								_react2.default.createElement(
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