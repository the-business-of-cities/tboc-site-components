"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Burger = function Burger(props) {
	return _react2.default.createElement(
		Wrapper,
		props,
		_react2.default.createElement(
			Bottom,
			props,
			_react2.default.createElement(Top, props),
			_react2.default.createElement(Middle, props)
		)
	);
};

Burger.displayName = "Burger";
Burger.defaultProps = {
	padding: 10,
	layerWidth: 30,
	layerHeight: 3,
	layerSpacing: 6,
	color: "#fff",
	borderRadius: 4,
	transitionDuration: 0.4
};

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: "Burger__Wrapper"
})(["width:", "px;height:", "px;position:relative;cursor:pointer;"], function (props) {
	return props.layerWidth + 2 * props.padding;
}, function (props) {
	return 3 * props.layerHeight + 2 * props.layerSpacing + 2 * props.padding;
});

var Bar = _styledComponents2.default.div.withConfig({
	displayName: "Burger__Bar"
})(["width:", "px;height:", "px;background-color:", ";border-radius:", "px;position:absolute;transition-property:transform;transition-duration:", "s;transition-timing-function:ease;"], function (props) {
	return props.layerWidth;
}, function (props) {
	return props.layerHeight;
}, function (props) {
	return props.color;
}, function (props) {
	return props.borderRadius;
}, function (props) {
	return 0.15 * 2 * props.transitionDuration;
});

var Bottom = (0, _styledComponents2.default)(Bar).withConfig({
	displayName: "Burger__Bottom"
})(["margin-top:", "px;bottom:", "px;left:", "px;", " transition-duration:", "s;transition-delay:", "s;transition-timing-function:", ";"], function (props) {
	return props.layerHeight / -2;
}, function (props) {
	return props.padding;
}, function (props) {
	return props.padding;
}, function (props) {
	return props.open ? "transform: translate3d(0, " + (props.layerSpacing + props.layerHeight) * -1 + "px, 0) rotate(-45deg);" : "";
}, function (props) {
	return 0.15 * 2 * props.transitionDuration;
}, function (props) {
	return props.open ? 0.32 * 2 * props.transitionDuration : 0.15 * 2 * props.transitionDuration;
}, function (props) {
	return props.open ? "cubic-bezier(0.215, 0.61, 0.355, 1)" : "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
});

var Middle = (0, _styledComponents2.default)(Bar).withConfig({
	displayName: "Burger__Middle"
})(["top:", "px;", " ", ";"], function (props) {
	return props.open ? 0 : (props.layerSpacing + props.layerHeight) * -1;
}, function (props) {
	return props.open ? "transform: rotate(-90deg);" : "";
}, function (props) {
	return "transition:\n\t\ttop\n\t\t" + 0.12 * 2 * props.transitionDuration + "s\n\t\t" + (props.open ? 0.18 : 0.3) * 2 * props.transitionDuration + "s\n\t\tcubic-bezier(0.33333, 0.66667, 0.66667, 1),\n\n\t\ttransform\n\t\t" + 0.15 * 2 * props.transitionDuration + "s\n\t\t" + (props.open ? 0.42 * 2 * props.transitionDuration + "s" : "") + "\n\t\t" + (props.open ? "cubic-bezier(0.215, 0.61, 0.355, 1)" : "cubic-bezier(0.55, 0.055, 0.675, 0.19)") + ";\n\t";
});

var Top = (0, _styledComponents2.default)(Bar).withConfig({
	displayName: "Burger__Top"
})(["opacity:", ";bottom:", "px;top:", "px;", ";"], function (props) {
	return props.open ? 0 : 1;
}, function (props) {
	return (props.layerSpacing + props.layerHeight) * -1;
}, function (props) {
	return props.open ? 0 : (2 * props.layerSpacing + 2 * props.layerHeight) * -1;
}, function (props) {
	return "transition:\n\t\ttop \n\t\t" + 0.3 * 2 * props.transitionDuration + "s\n\t\t" + (!props.open ? 0.3 * 2 * props.transitionDuration + "s" : "") + "\n\t\tcubic-bezier(0.33333, 0.66667, 0.66667, 1),\n\n\t\topacity\n\t\t" + 0.1 * 2 * props.transitionDuration + "s\n\t\t" + (props.open ? 0.27 * 2 * props.transitionDuration + "s" : "") + "\n\t\tlinear;\n\t";
});

// --------------------------------------------------

exports.default = Burger;