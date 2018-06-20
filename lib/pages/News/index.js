"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NewsPage = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _masonryLayout = require("masonry-layout");

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

var _recompose = require("recompose");

var _toolbox = require("../../components/toolbox");

var _NewsTile = require("./NewsTile");

var _NewsTile2 = _interopRequireDefault(_NewsTile);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var doMasonry = function doMasonry() {
	setTimeout(function () {
		var masonryInstance = new _masonryLayout2.default(".masonry-items", {
			itemSelector: ".masonry-item",
			percentPosition: true
		});
	}, 500);
};

var enhance = (0, _recompose.lifecycle)({
	componentDidMount: function componentDidMount() {
		doMasonry();
	}
});

// --------------------------------------------------

var News = function News(_ref) {
	var title = _ref.title,
	    html = _ref.html,
	    news = _ref.news;
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
					_react2.default.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: html
						}
					}),
					_react2.default.createElement(
						"h2",
						null,
						"Recent Posts"
					),
					_react2.default.createElement(
						_toolbox.TilesWrapper,
						{ className: "masonry-items" },
						news.map(function (props, i) {
							return _react2.default.createElement(_NewsTile2.default, (0, _extends3.default)({}, props, { key: props.slug + i }));
						})
					)
				)
			)
		)
	);
};

News.displayName = "News";
var NewsPage = exports.NewsPage = enhance(News);