"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.onSubmitNewsXml = exports.createNews = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _xmlJs = require("xml-js");

var _xmlJs2 = _interopRequireDefault(_xmlJs);

var _toMarkdown = require("to-markdown");

var _toMarkdown2 = _interopRequireDefault(_toMarkdown);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = "en-US";
var addLangKeys = R.map(function (val) {
	return (0, _defineProperty3.default)({}, lang, val);
});

var createNews = exports.createNews = function createNews(_ref2) {
	var space = _ref2.space;
	return function (_ref3) {
		var title = _ref3.title,
		    content = _ref3.content,
		    image = _ref3.image,
		    originalDate = _ref3.originalDate,
		    featured = _ref3.featured;

		(image ? space.createAsset({
			fields: addLangKeys({
				file: image
			})
		}).then(function (asset) {
			return asset.processForAllLocales().then(function (asset) {
				return asset;
			}, function () {
				return Promise.resolve();
			});
		}).then((0, _util.plog)("asset")) : Promise.resolve()).then(function (asset) {
			return space.createEntry("news", {
				fields: addLangKeys(Object.assign({
					title: title,
					content: content,
					originalDate: originalDate,
					featured: featured
				}, asset ? {
					image: {
						sys: {
							type: "Link",
							linkType: "Asset",
							id: asset.sys.id
						}
					}
				} : {}))
			}).then((0, _util.plog)("entry"));
		}).then((0, _util.plog)("then"));
	};
};

var onSubmitNewsXml = exports.onSubmitNewsXml = function onSubmitNewsXml(_ref4) {
	var xml = _ref4.xml,
	    createNews = _ref4.createNews;
	return function () {
		var json = _xmlJs2.default.xml2js(xml, {
			compact: true
		});

		var _items = R.path(["rss", "channel", "item"])(json);
		var items = _items.slice(0, 10);

		var inputs = items.map(function (item) {
			// -- TITLE ----
			var title = R.path(["title", "_text"])(item) || "";

			// -- CONTENT ----
			var content = (0, _toMarkdown2.default)((R.path(["content:encoded", "_cdata"])(item) || "").replace(/<img([^\>]+)>/g, " "));

			// -- IMAGE ----
			var imageUrl = ((R.path(["content:encoded", "_cdata"])(item) || "").match(/src="([^"]+)"/) || {})[1];

			var image = imageUrl ? {
				upload: imageUrl,
				fileName: imageUrl.slice(imageUrl.lastIndexOf("/") + 1),
				contentType: "image/" + imageUrl.slice(imageUrl.lastIndexOf(".") + 1)
			} : undefined;

			// -- DATE ----
			var originalDate = undefined;
			if (item.pubDate && item.pubDate._text) {
				originalDate = new Date(item.pubDate._text).toISOString();
			}

			// -- FEATURED ----
			var featured = false;
			var setFeatured = function setFeatured(c) {
				if (c._attributes.domain === "post_tag" && c._cdata === "featured") {
					featured = true;
				}
			};

			if (item.category) {
				if (item.category.forEach) {
					item.category.forEach(setFeatured);
				} else {
					setFeatured(item.category);
				}
			}

			// ----------------

			console.log({
				item: item,
				title: title,
				content: content,
				image: image,
				originalDate: originalDate,
				featured: featured
			});

			if (true) {
				return {
					title: title,
					content: content,
					image: image,
					originalDate: originalDate,
					featured: featured
				};
			} else {
				return null;
			}
		});

		return inputs.reduce(function (p, input) {
			return p.then(function () {
				return input ? createNews(input) : Promise.resolve();
			});
		}, Promise.resolve());
	};
};