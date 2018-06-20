"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Home = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["flex-basis: 100%"], ["flex-basis: 100%"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\t\t\t\tfont-size: 1.25em;\n\t\t\t\t\ttext-align: left;\n\t\t\t\t"], ["\n\t\t\t\t\tfont-size: 1.25em;\n\t\t\t\t\ttext-align: left;\n\t\t\t\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["text-align: left;"], ["text-align: left;"]);

var _toolbox = require("../../components/toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("../../style/vars");

var vars = _interopRequireWildcard(_vars);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Slider = require("../../components/Slider");

var _Slider2 = _interopRequireDefault(_Slider);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SubscribeBanner = require("../../components/SubscribeBanner");

var _SubscribeBanner2 = _interopRequireDefault(_SubscribeBanner);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var OneTwoWrapper = (0, _styledComponents2.default)(_toolbox.Container).withConfig({
	displayName: "Home__OneTwoWrapper"
})(["display:flex;flex-wrap:wrap;max-width:48em;> div{&:first-child{flex-basis:100%;", ";p{font-size:1.5em;text-align:center;font-family:", ";font-weight:bold;margin-bottom:0;", ";}}&:nth-child(2){flex-basis:100%;margin:0 auto;", ";p{margin-top:0.5em;text-align:justify;", ";}}}"], mixins.xs(_templateObject), vars.font.heading, mixins.xs(_templateObject2), mixins.xs(_templateObject), mixins.xs(_templateObject3));

var HomePageWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Home__HomePageWrapper"
})(["position:relative;overflow:hidden;"]);

// --------------------------------------------------

var Home = exports.Home = function Home(_ref) {
	var html = _ref.html,
	    intro = _ref.intro,
	    slideContents = _ref.slideContents;
	return _react2.default.createElement(
		HomePageWrapper,
		null,
		slideContents && _react2.default.createElement(_Slider2.default, null),
		_react2.default.createElement(
			OneTwoWrapper,
			null,
			_react2.default.createElement(
				_toolbox.TileWrapper,
				null,
				_react2.default.createElement(
					"h2",
					null,
					intro
				)
			),
			_react2.default.createElement(_toolbox.TileWrapper, { dangerouslySetInnerHTML: { __html: html } })
		),
		_react2.default.createElement(
			_toolbox.Container,
			null,
			_react2.default.createElement(_toolbox.Boxes, null)
		),
		_react2.default.createElement(_SubscribeBanner2.default, null)
	);
};
Home.displayName = "Home";