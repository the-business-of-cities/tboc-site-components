"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _masonryLayout = require("masonry-layout");

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

var _recompose = require("recompose");

var _data = require("src/data");

var _data2 = _interopRequireDefault(_data);

var _toolbox = require("src/components/common/toolbox");

var _Head = require("src/components/common/Head");

var _Head2 = _interopRequireDefault(_Head);

var _NewsTile = require("./NewsTile");

var _NewsTile2 = _interopRequireDefault(_NewsTile);

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

var Publications = function Publications() {
	return React.createElement(
		_toolbox.PageWrapper,
		null,
		React.createElement(_Head2.default, { pageData: _data2.default.pagesMap.blog }),
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
						_data2.default.pagesMap.blog.title
					),
					React.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: _data2.default.pagesMap.blog.html
						}
					}),
					React.createElement(
						"h2",
						null,
						"Recent Posts"
					),
					React.createElement(
						_toolbox.TilesWrapper,
						{ className: "masonry-items" },
						_data2.default.news.map(function (props, i) {
							return React.createElement(_NewsTile2.default, (0, _extends3.default)({}, props, { key: props.slug + i }));
						})
					)
				)
			)
		)
	);
};

Publications.displayName = "Publications";
exports.default = enhance(Publications);