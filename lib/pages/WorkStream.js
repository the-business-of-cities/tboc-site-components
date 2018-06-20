"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WorkStream = undefined;

var _toolbox = require("../components/toolbox");

var _Generic = require("./Generic");

var _Generic2 = _interopRequireDefault(_Generic);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var WorkStream = exports.WorkStream = function WorkStream(props) {
	return _react2.default.createElement(
		_Generic2.default,
		props,
		_react2.default.createElement(_toolbox.Boxes, null)
	);
};
WorkStream.displayName = "WorkStream";