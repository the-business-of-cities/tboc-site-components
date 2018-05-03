"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("src/components/common/toolbox");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _Head = require("src/components/common/Head");

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var EventDate = _styledComponents2.default.div.withConfig({
	displayName: "Event__EventDate"
})(["font-size:0.8em;opacity:0.9;"]);

var EventRole = _styledComponents2.default.div.withConfig({
	displayName: "Event__EventRole"
})(["font-size:0.8em;opacity:0.9;margin-bottom:0.5em;"]);

// --------------------------------------------------

var Event = function Event(_ref) {
	var event = _ref.event,
	    title = _ref.title;
	return React.createElement(
		_toolbox.PageWrapper,
		null,
		React.createElement(_Head2.default, { pageData: null }),
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
						event.name
					),
					React.createElement(
						EventDate,
						null,
						(0, _moment2.default)(event.date).format("Do MMMM YYYY"),
						",",
						" ",
						event.location
					),
					React.createElement(
						EventRole,
						null,
						event.role
					),
					React.createElement(
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