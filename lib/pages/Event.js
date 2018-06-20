"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Event = undefined;

var _toolbox = require("../components/toolbox");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var EventDate = _styledComponents2.default.div.withConfig({
	displayName: "Event__EventDate"
})(["font-size:0.8em;opacity:0.9;"]);

var EventRole = _styledComponents2.default.div.withConfig({
	displayName: "Event__EventRole"
})(["font-size:0.8em;opacity:0.9;margin-bottom:0.5em;"]);

// --------------------------------------------------

var Event = exports.Event = function Event(_ref) {
	var event = _ref.event;
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
						event.name
					),
					_react2.default.createElement(
						EventDate,
						null,
						(0, _moment2.default)(event.date).format("Do MMMM YYYY"),
						",",
						" ",
						event.location
					),
					_react2.default.createElement(
						EventRole,
						null,
						event.role
					),
					_react2.default.createElement(
						"p",
						null,
						event.content
					)
				)
			)
		)
	);
};

Event.displayName = "Event";
exports.default = Event;