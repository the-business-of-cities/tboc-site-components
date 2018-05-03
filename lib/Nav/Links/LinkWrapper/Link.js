"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require("react-router-dom");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var _gatsbyLink = require("gatsby-link");

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var linkStyle = [(0, _styledComponents.css)(["font-size:1em;"]), (0, _styledComponents.css)(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0.5em ", ";color:", ";", ";", ";&.active{color:", ";margin-top:", ";border-bottom:", ";}&:hover{margin-top:", ";text-decoration:", ";border-bottom:", ";}"], function (props) {
	return props.padding.other;
}, function (props) {
	return props.color.other;
}, function (props) {
	return props.underlineColor && "height: 100%";
}, function (props) {
	return props.border && "\n\t\t\tborder: 2px solid white;\n    \t\tborder-radius: 3px;\n    \t\tmargin: 0.5em;\n\t\t";
}, function (props) {
	return props.highlightColor.other;
}, function (props) {
	return props.underlineColor && "3px";
}, function (props) {
	return props.underlineColor && "3px solid " + props.underlineColor;
}, function (props) {
	return props.underlineColor && "3px";
}, function (props) {
	return !props.underlineColor && "underline";
}, function (props) {
	return props.underlineColor && "3px solid " + props.underlineColor;
})];

var StyledLink = _styledComponents2.default.a.withConfig({
	displayName: "Link__StyledLink"
})(["", ";", ";white-space:nowrap;", ";", ";&.active{", ";font-weight:bold;}&:hover{", ";}"], (0, _codogoUtilityFunctions.xs)(_templateObject, linkStyle[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, linkStyle[1]), _codogoUtilityFunctions.clearfix.link, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("color", props.color);
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("color", props.highlightColor);
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("color", props.highlightColor);
});

var GatsbyLink = StyledLink.withComponent(_gatsbyLink2.default);
var RouterLink = StyledLink.withComponent(_reactRouterDom.Link);
var RouterNavLink = StyledLink.withComponent(_reactRouterDom.NavLink);
var DivLink = StyledLink.withComponent("div");

var LinkOptions = {
	"a": StyledLink,
	"gatsby-link": GatsbyLink,
	"link": RouterLink,
	"nav-link": RouterNavLink,
	"div": DivLink
};

// --------------------------------------------------

var Link = function (_Component) {
	(0, _inherits3.default)(Link, _Component);

	function Link() {
		(0, _classCallCheck3.default)(this, Link);
		return (0, _possibleConstructorReturn3.default)(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
	}

	(0, _createClass3.default)(Link, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    border = _props.border,
			    close = _props.close,
			    theme = _props.theme,
			    to = _props.to;


			var VariousLink = LinkOptions[this.props.as];

			return _react2.default.createElement(
				VariousLink,
				{
					to: to,
					href: to,
					onClick: close,
					underlineColor: theme.underlineColor,
					padding: theme.padding,
					color: theme.color,
					highlightColor: theme.highlightColor,
					border: border
				},
				this.props.children
			);
		}
	}]);
	return Link;
}(_react.Component);

Link.displayName = "Link";
exports.default = Link;