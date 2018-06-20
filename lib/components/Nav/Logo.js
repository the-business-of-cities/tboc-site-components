"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tbottom: 0;\n\t"], ["\n\t\tbottom: 0;\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\tbottom: ", ";\n\t"], ["\n\t\tbottom: ", ";\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _gatsbyLink = require("gatsby-link");

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var IndexLink = function IndexLink(props) {
	return _react2.default.createElement(_gatsbyLink2.default, (0, _extends3.default)({ to: "/" }, props));
};

IndexLink.displayName = "IndexLink";
var LogoWrapper = (0, _styledComponents2.default)(IndexLink).withConfig({
	displayName: "Logo__LogoWrapper"
})(["position:absolute;top:0;", ";display:flex;flex-direction:row;align-items:center;", ";", ";"], function (props) {
	return mixins.bpEither("left", props.theme.dimensions.nav.margin);
}, mixins.xs(_templateObject), mixins.bp.sm.min(_templateObject2, function (props) {
	return props.theme.dimensions.nav.linksHeight;
}));

var LogoText = _styledComponents2.default.div.withConfig({
	displayName: "Logo__LogoText"
})(["font-size:2em;font-family:", ";text-transform:uppercase;"], function (props) {
	return props.theme.font.title.family;
});

var LogoImage = _styledComponents2.default.img.withConfig({
	displayName: "Logo__LogoImage"
})(["height:80%;width:auto;"]);

// --------------------------------------------------

var Logo = function Logo(props) {
	return _react2.default.createElement(
		LogoWrapper,
		{ to: "/" },
		props.logo ? _react2.default.createElement(LogoImage, { src: props.logo.url }) : _react2.default.createElement(
			LogoText,
			null,
			props.text
		)
	);
};

Logo.displayName = "Logo";
exports.default = Logo;