"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["padding-top: 20em;"], ["padding-top: 20em;"]);

var _toolbox = require("src/components/common/toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var ImageWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Generic__ImageWrapper"
})(["img{width:100%;max-height:1em;}"]);

var Image = _styledComponents2.default.div.withConfig({
	displayName: "Generic__Image"
})(["", ";padding-top:15em;", ";"], mixins.bgImage, mixins.bp.sm.min(_templateObject));
// --------------------------------------------------

var Generic = function Generic(_ref) {
	var fullTitle = _ref.fullTitle,
	    title = _ref.title,
	    secondaryImage = _ref.secondaryImage,
	    html = _ref.html,
	    children = _ref.children;
	return React.createElement(
		_toolbox.PageWrapper,
		null,
		React.createElement(
			_toolbox.Container,
			null,
			React.createElement(
				_toolbox.TextCell,
				null,
				React.createElement(
					_toolbox.PageBody,
					null,
					React.createElement(
						"h1",
						null,
						fullTitle || title
					),
					secondaryImage && React.createElement(
						ImageWrapper,
						null,
						React.createElement(Image, { src: secondaryImage.url })
					),
					React.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: html
						}
					}),
					children
				)
			)
		)
	);
};

Generic.displayName = "Generic";
exports.default = Generic;