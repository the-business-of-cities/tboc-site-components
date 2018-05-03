"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRouterDom = require("react-router-dom");

var _toolbox = require("src/components/common/toolbox");

// --------------------------------------------------

var NewsTile = function NewsTile(_ref) {
	var image = _ref.image,
	    title = _ref.title,
	    link = _ref.link,
	    description = _ref.description,
	    slug = _ref.slug;
	return React.createElement(
		_toolbox.TileWrapper,
		{ className: "masonry-item" },
		React.createElement(
			_toolbox.TileInner,
			null,
			React.createElement(
				_reactRouterDom.Link,
				{ to: link ? link : "/blog/" + slug },
				React.createElement(
					_toolbox.TileImage,
					null,
					React.createElement(_toolbox.SmartImg, image)
				)
			),
			React.createElement(
				_toolbox.TileContent,
				null,
				React.createElement(
					_reactRouterDom.Link,
					{ to: link ? link : "/blog/" + slug },
					React.createElement(
						_toolbox.TileTitle,
						null,
						title
					)
				),
				React.createElement(
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