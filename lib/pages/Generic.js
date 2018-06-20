"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Generic = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["padding-top: 20em;"], ["padding-top: 20em;"]);

var _toolbox = require("../components/toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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

var Generic = exports.Generic = function Generic(_ref) {
	var title = _ref.title,
	    secondaryImage = _ref.secondaryImage,
	    description = _ref.description,
	    content = _ref.content;
	return _react2.default.createElement(
		_toolbox.PageWrapper,
		null,
		_react2.default.createElement(
			_toolbox.Container,
			null,
			_react2.default.createElement(
				_toolbox.TextCell,
				null,
				_react2.default.createElement(
					_toolbox.PageBody,
					null,
					_react2.default.createElement(
						"h1",
						null,
						title
					),
					secondaryImage && _react2.default.createElement(
						ImageWrapper,
						null,
						_react2.default.createElement(Image, { src: secondaryImage.file.url })
					),
					_react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(
							"em",
							null,
							description
						)
					),
					_react2.default.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: (0, _marked2.default)(content)
						}
					})
				)
			)
		)
	);
};
Generic.displayName = "Generic";