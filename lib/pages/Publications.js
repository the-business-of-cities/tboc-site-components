"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["margin: 0;"], ["margin: 0;"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["width: calc(50% + ", "px);"], ["width: calc(50% + ", "px);"]);

var _toolbox = require("src/components/common/toolbox");

var _recompose = require("recompose");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _masonryLayout = require("masonry-layout");

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

var _data = require("src/data");

var _data2 = _interopRequireDefault(_data);

var _Head = require("src/components/common/Head");

var _Head2 = _interopRequireDefault(_Head);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("src/components/style/vars");

var vars = _interopRequireWildcard(_vars);

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
	return React.createElement(
		"a",
		{ href: link },
		React.createElement(
			PubWrapper,
			{ className: "masonry-item" },
			React.createElement(
				_toolbox.GridCell,
				null,
				React.createElement(_toolbox.SmartImg, (0, _extends3.default)({}, image, { unlimitedHeight: true })),
				React.createElement(
					PubText,
					null,
					React.createElement(
						PubTitle,
						null,
						title
					),
					React.createElement("div", {
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
var Publications = function Publications() {
	return React.createElement(
		_toolbox.PageWrapper,
		null,
		React.createElement(_Head2.default, { pageData: _data2.default.pagesMap.publications }),
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
						_data2.default.pagesMap.publications.title
					),
					React.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: _data2.default.pagesMap.publications.html
						}
					}),
					React.createElement(
						"h2",
						null,
						"Recent Publications"
					),
					React.createElement(
						PubsWrapper,
						{ className: "masonry-items" },
						_data2.default.publications.map(function (props, i) {
							return React.createElement(PublicationTile, (0, _extends3.default)({}, props, { key: props.slug + i }));
						})
					)
				)
			)
		)
	);
};

Publications.displayName = "Publications";
exports.default = enhance(Publications);