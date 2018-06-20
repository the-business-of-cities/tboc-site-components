"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _vars = require("../style/vars");

var vars = _interopRequireWildcard(_vars);

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Head = function Head(_ref) {
	var pageData = _ref.pageData;
	return _react2.default.createElement(
		_reactHelmet2.default,
		null,
		_react2.default.createElement("meta", { charSet: "utf-8" }),
		_react2.default.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
		_react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
		_react2.default.createElement("link", {
			rel: "canonical",
			href: "http://www.thebusinessofcities.com/" + (pageData && pageData.slug ? pageData.slug : "")
		}),
		_react2.default.createElement(
			"title",
			null,
			pageData && pageData.title ? pageData.title + " | " + _data2.default.siteTitle : _data2.default.siteTitle + " | " + _data2.default.siteDescription
		),
		_react2.default.createElement("meta", {
			name: "description",
			content: pageData && pageData.description ? pageData.description : _data2.default.siteDescription
		}),
		_react2.default.createElement("meta", {
			property: "og:url",
			content: "http://www.thebusinessofcities.com/" + (pageData && pageData.slug ? pageData.slug : "")
		}),
		_react2.default.createElement("meta", { property: "og:type", content: "website" }),
		_react2.default.createElement("meta", {
			property: "og:title",
			content: pageData && pageData.title ? pageData.title + " | " + _data2.default.siteTitle : _data2.default.siteTitle + " | " + _data2.default.siteDescription
		}),
		_react2.default.createElement("meta", { property: "og:site_name", content: _data2.default.sitetitle }),
		_react2.default.createElement("meta", {
			property: "og:description",
			content: pageData && pageData.description ? pageData.description : _data2.default.siteDescription
		}),
		_react2.default.createElement("link", {
			rel: "image_src",
			type: "image/jpeg",
			href: pageData && pageData.image ? pageData.image.url : _data2.default.homeImage.url
		}),
		_react2.default.createElement("meta", {
			property: "og:image",
			content: pageData && pageData.image ? pageData.image.url : _data2.default.homeImage.url
		}),
		_react2.default.createElement("meta", { property: "og:image:width", content: "180" }),
		_react2.default.createElement("meta", { property: "og:image:height", content: "110" }),
		_react2.default.createElement("meta", {
			property: "og:image",
			content: pageData && pageData.image ? pageData.image.url : _data2.default.homeImage.url
		}),
		_react2.default.createElement("meta", { property: "og:image:width", content: "600" }),
		_react2.default.createElement("meta", { property: "og:image:height", content: "315" }),
		_react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
		_react2.default.createElement("meta", { name: "twitter:site", content: vars.meta.twitterUsername }),
		_react2.default.createElement("meta", { name: "twitter:creator", content: vars.meta.twitterCreator }),
		pageData && pageData.title ? "<meta name = \"twitter:title\" content = " + pageData.title + " />" : "<meta name = \"twitter:title\" content = " + _data2.default.siteTitle + " />",
		_react2.default.createElement("meta", {
			name: "twitter:url",
			content: "http://www.thebusinessofcities.com/" + (pageData && pageData.slug ? pageData.slug : "")
		}),
		_react2.default.createElement("meta", {
			name: "twitter:description",
			content: pageData && pageData.description ? pageData.description : _data2.default.siteDescription
		}),
		_react2.default.createElement("meta", {
			name: "twitter:image:src",
			content: pageData && pageData.image ? pageData.image.url : _data2.default.homeImage.url
		}),
		_react2.default.createElement("meta", {
			name: "google-site-verification",
			content: vars.meta.googleSearch
		})
	);
};

Head.displayName = "Head";
exports.default = Head;