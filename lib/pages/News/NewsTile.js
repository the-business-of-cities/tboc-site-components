"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRouterDom = require("react-router-dom");

var _toolbox = require("../../components/toolbox");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var NewsTile = function NewsTile(_ref) {
	var image = _ref.image,
	    title = _ref.title,
	    link = _ref.link,
	    description = _ref.description,
	    slug = _ref.slug;
	return _react2.default.createElement(
		_toolbox.TileWrapper,
		{ className: "masonry-item" },
		_react2.default.createElement(
			_toolbox.TileInner,
			null,
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: link ? link : "/blog/" + slug },
				_react2.default.createElement(
					_toolbox.TileImage,
					null,
					_react2.default.createElement(_toolbox.SmartImg, image)
				)
			),
			_react2.default.createElement(
				_toolbox.TileContent,
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: link ? link : "/blog/" + slug },
					_react2.default.createElement(
						_toolbox.TileTitle,
						null,
						title
					)
				),
				_react2.default.createElement(
					"p",
					null,
					description
				)
			)
		)
	);
};

NewsTile.displayName = "NewsTile";
exports.default = NewsTile;