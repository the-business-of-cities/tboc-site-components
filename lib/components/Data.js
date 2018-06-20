"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _toolbox = require("./toolbox");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Wrapper = (0, _styledComponents2.default)(_toolbox.Container).withConfig({
	displayName: "Data__Wrapper"
})(["white-space:pre-wrap;word-wrap:break-word;font-size:11px;font-family:monospace;"]);

exports.default = function (data) {
	return function () {
		return _react2.default.createElement(
			Wrapper,
			null,
			console.log(data)
		);
	};
};