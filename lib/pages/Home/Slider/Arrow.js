"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var ArrowWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Arrow__ArrowWrapper"
})(["position:absolute;z-index:1;top:50%;transform:translateY(-50%);color:", ";font-size:1.5em;margin:0 0.5em;cursor:pointer;", ";"], R.path(["theme", "nav"]), function (props) {
	return props.next ? "right: 0;" : "left: 0;";
});

// --------------------------------------------------

var Arrow = function Arrow(_ref) {
	var next = _ref.next,
	    onClick = _ref.onClick;
	return React.createElement(
		ArrowWrapper,
		{ next: next, onClick: onClick },
		React.createElement(
			"span",
			{ className: "fa-stack" },
			React.createElement("i", { className: "fa fa-circle fa-inverse fa-stack-2x" }),
			React.createElement("i", {
				className: "fa fa-chevron-circle-" + (next ? "right" : "left") + " fa-stack-2x"
			})
		)
	);
};

Arrow.displayName = "Arrow";
exports.default = Arrow;