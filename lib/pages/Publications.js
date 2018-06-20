"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PublicationPage = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["margin: 0;"], ["margin: 0;"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["width: calc(50% + ", "px);"], ["width: calc(50% + ", "px);"]);

var _toolbox = require("../components/toolbox");

var _recompose = require("recompose");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("../style/vars");

var vars = _interopRequireWildcard(_vars);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _masonryLayout = require("masonry-layout");

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

var _Head = require("../components/Head");

var _Head2 = _interopRequireDefault(_Head);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var PubsWrapper = (0, _styledComponents2.default)(_toolbox.AntiGridCell).withConfig({
	displayName: "Publications__PubsWrapper"
})(["", ";"], mixins.bp.sm.min(_templateObject));

var borderWidth = 2;

var PubWrapper = (0, _styledComponents2.default)(_toolbox.GridCell).withConfig({
	displayName: "Publications__PubWrapper"
})(["width:calc(50% + ", "px);", " border:", "px solid ", ";margin:-", "px;padding:0;padding-bottom:0;"], borderWidth, mixins.bp.sm.max(_templateObject2, borderWidth), borderWidth, vars.colors.bgdark, borderWidth * 0.5);

var PubText = _styledComponents2.default.div.withConfig({
	displayName: "Publications__PubText"
})(["font-size:0.8em;"]);

var PubTitle = _styledComponents2.default.h3.withConfig({
	displayName: "Publications__PubTitle"
})(["margin-bottom:0;"]);

var doMasonry = function doMasonry() {
	setTimeout(function () {
		var masonryInstance = new _masonryLayout2.default(".masonry-items", {
			itemSelector: ".masonry-item",
			percentPosition: true
		});
		// const imagesloadedInstance = new imagesloaded(
		// 	".masonry-items",
		// 	() => masonryInstance.layout()
		// );
	}, 1000);
};

var enhance = (0, _recompose.lifecycle)({
	componentDidMount: function componentDidMount() {
		doMasonry();
	}
});

var PublicationTile = function PublicationTile(_ref) {
	var image = _ref.image,
	    title = _ref.title,
	    link = _ref.link,
	    description = _ref.description;
	return _react2.default.createElement(
		"a",
		{ href: link },
		_react2.default.createElement(
			PubWrapper,
			{ className: "masonry-item" },
			_react2.default.createElement(
				_toolbox.GridCell,
				null,
				_react2.default.createElement(_toolbox.SmartImg, (0, _extends3.default)({}, image, { unlimitedHeight: true })),
				_react2.default.createElement(
					PubText,
					null,
					_react2.default.createElement(
						PubTitle,
						null,
						title
					),
					_react2.default.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: description
						}
					})
				)
			)
		)
	);
};

PublicationTile.displayName = "PublicationTile";
var Publications = function Publications(_ref2) {
	var data = _ref2.data;
	return _react2.default.createElement(
		_toolbox.PageWrapper,
		null,
		_react2.default.createElement(_Head2.default, { pageData: data.pagesMap.publications }),
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
						data.pagesMap.publications.title
					),
					_react2.default.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: data.pagesMap.publications.html
						}
					}),
					_react2.default.createElement(
						"h2",
						null,
						"Recent Publications"
					),
					_react2.default.createElement(
						PubsWrapper,
						{ className: "masonry-items" },
						data.publications.map(function (props, i) {
							return _react2.default.createElement(PublicationTile, (0, _extends3.default)({}, props, { key: props.slug + i }));
						})
					)
				)
			)
		)
	);
};

Publications.displayName = "Publications";
var PublicationPage = exports.PublicationPage = enhance(Publications);