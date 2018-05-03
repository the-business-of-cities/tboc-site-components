"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _LinkWrapper = require("./LinkWrapper");

var _LinkWrapper2 = _interopRequireDefault(_LinkWrapper);

var _codogoUtilityFunctions = require("codogo-utility-functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var linksStyle = [(0, _styledComponents.css)(["align-items:center;background:", ";left:0;position:absolute;right:0;top:", ";transform:translateY(", "%);transition:0.3s all ease-out;", ";"], function (props) {
	return props.backgroundColor.xs;
}, function (props) {
	return props.topOffset.xs;
}, function (props) {
	return props.open ? 0 : -150;
}, (0, _codogoUtilityFunctions.shadow)(2)), (0, _styledComponents.css)(["justify-self:flex-end;display:flex;align-items:center;order:2;"])];

var LinksWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Links__LinksWrapper"
})(["", ";", ";"], (0, _codogoUtilityFunctions.xs)(_templateObject, linksStyle[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, linksStyle[1]));

// --------------------------------------------------

var Links = function Links(props) {
	return _react2.default.createElement(
		LinksWrapper,
		{
			open: props.open,
			backgroundColor: props.theme.backgroundColor,
			fontSize: props.theme.fontSize,
			font: props.theme.font,
			topOffset: props.theme.topOffset
		},
		props.links.map(function (navlink, i) {
			return _react2.default.createElement(_LinkWrapper2.default, {
				key: navlink.to,
				i: i,
				content: navlink.content,
				as: navlink.as,
				to: navlink.to,
				dropdown: navlink.dropdown,
				border: navlink.border,
				theme: props.theme,
				close: props.close
			});
		})
	);
};

Links.displayName = "Links";
exports.default = Links;