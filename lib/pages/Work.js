"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["flex-basis: 100%"], ["flex-basis: 100%"]);

var _reactRouterDom = require("react-router-dom");

var _toolbox = require("src/components/common/toolbox");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _Generic = require("./Generic");

var _Generic2 = _interopRequireDefault(_Generic);

var _routesConfig = require("src/routesConfig");

var _routesConfig2 = _interopRequireDefault(_routesConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var ThirdsWrapper = (0, _styledComponents2.default)(_toolbox.AntiGridCell).withConfig({
	displayName: "Work__ThirdsWrapper"
})(["display:flex;flex-wrap:wrap;margin-top:3em;> div{flex-basis:33.33%;", ";font-size:0.9em;a{&,&:hover,&:visited,&:active{font-weight:bold;}}}"], mixins.xs(_templateObject));

var ArrowIcon = function ArrowIcon() {
	return React.createElement(_toolbox.Icon, { type: "arrow-right", size: "0.9em", marginLeft: "0.1em" });
};

ArrowIcon.displayName = "ArrowIcon";
var Comp = function Comp(props) {
	return React.createElement(
		_Generic2.default,
		props,
		React.createElement(
			ThirdsWrapper,
			null,
			_routesConfig2.default.filter(R.prop("service")).map(function (page) {
				return React.createElement(
					_toolbox.TileWrapper,
					null,
					React.createElement(
						"h3",
						null,
						page.title
					),
					React.createElement(
						"p",
						null,
						page.description
					),
					React.createElement(
						"p",
						null,
						React.createElement(
							_reactRouterDom.Link,
							{ to: page.slug },
							"Find out more ",
							React.createElement(ArrowIcon, null)
						)
					)
				);
			})
		)
	);
};

Comp.displayName = "Comp";
exports.default = Comp;