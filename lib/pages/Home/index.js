"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["flex-basis: 100%"], ["flex-basis: 100%"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\t\t\t\tfont-size: 1.25em;\n\t\t\t\t\ttext-align: left;\n\t\t\t\t"], ["\n\t\t\t\t\tfont-size: 1.25em;\n\t\t\t\t\ttext-align: left;\n\t\t\t\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["text-align: left;"], ["text-align: left;"]);

var _toolbox = require("src/components/common/toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("src/components/style/vars");

var vars = _interopRequireWildcard(_vars);

var _data = require("src/data");

var _data2 = _interopRequireDefault(_data);

var _Head = require("src/components/common/Head");

var _Head2 = _interopRequireDefault(_Head);

var _Slider = require("./Slider");

var _Slider2 = _interopRequireDefault(_Slider);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SubscribeBanner = require("./SubscribeBanner");

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

var Home = function Home() {
	return React.createElement(
		HomePageWrapper,
		null,
		React.createElement(_Head2.default, null),
		React.createElement(_Slider2.default, null),
		React.createElement(
			OneTwoWrapper,
			null,
			React.createElement(
				_toolbox.TileWrapper,
				null,
				React.createElement(
					"h2",
					null,
					"We advise decision-makers on their urban strategies.",
					React.createElement("br", null),
					"We make sense of global complexity.",
					React.createElement("br", null),
					"We benchmark cities on the metrics that matter.",
					React.createElement("br", null),
					"We write leading edge reports.",
					React.createElement("br", null),
					"We chair and speak at global events."
				)
			),
			React.createElement(_toolbox.TileWrapper, { dangerouslySetInnerHTML: { __html: _data2.default.homeHtml } })
		),
		React.createElement(
			_toolbox.Container,
			null,
			React.createElement(_toolbox.Boxes, null)
		),
		React.createElement(_SubscribeBanner2.default, null)
	);
};

Home.displayName = "Home";
exports.default = Home;