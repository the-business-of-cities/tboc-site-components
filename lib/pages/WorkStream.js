"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("src/components/common/toolbox");

var _Generic = require("./Generic");

var _Generic2 = _interopRequireDefault(_Generic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Comp = function Comp(props) {
	return React.createElement(
		_Generic2.default,
		props,
		React.createElement(_toolbox.Boxes, null)
	);
};

Comp.displayName = "Comp";
exports.default = Comp;