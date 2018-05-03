"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _util = require("src/lib/util");

var _toolbox = require("src/components/common/toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Wrapper = (0, _styledComponents2.default)(_toolbox.Container).withConfig({
	displayName: "Data__Wrapper"
})(["white-space:pre-wrap;word-wrap:break-word;font-size:11px;font-family:monospace;"]);

exports.default = function (data) {
	return function () {
		return React.createElement(
			Wrapper,
			null,
			(0, _util.printObj)(data),
			console.log(data)
		);
	};
};