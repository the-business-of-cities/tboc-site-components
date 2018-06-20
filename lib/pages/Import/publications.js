"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.onSubmitPublicationsXml = exports.createPublication = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _xmlJs = require("xml-js");

var _xmlJs2 = _interopRequireDefault(_xmlJs);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lang = "en-US";
var addLangKeys = R.map(function (val) {
	return (0, _defineProperty3.default)({}, lang, val);
});

var createPublication = exports.createPublication = function createPublication(_ref2) {
	var space = _ref2.space;
	return function (_ref3) {
		var title = _ref3.title,
		    description = _ref3.description,
		    link = _ref3.link,
		    image = _ref3.image,
		    approximateDate = _ref3.approximateDate,
		    category = _ref3.category,
		    featured = _ref3.featured;

		(image ? space.createAsset({
			fields: addLangKeys({
				file: image
			})
		}).then(function (asset) {
			return asset.processForAllLocales();
		}).then((0, _util.plog)("asset")) : Promise.resolve()).then(function (asset) {
			return space.createEntry("publication", {
				fields: addLangKeys(Object.assign({
					title: title,
					description: description,
					link: link,
					approximateDate: approximateDate,
					category: category,
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

var onSubmitPublicationsXml = exports.onSubmitPublicationsXml = function onSubmitPublicationsXml(_ref4) {
	var xml = _ref4.xml,
	    space = _ref4.space,
	    createPublication = _ref4.createPublication;
	return function () {
		var json = _xmlJs2.default.xml2js(xml, {
			compact: true
		});

		var _items = R.path(["rss", "channel", "item"])(json);
		var items = _items;

		var inputs = items.map(function (item) {
			// -- TITLE ----
			var title = R.path(["title", "_text"])(item) || "";

			// -- DESCRIPTION ----
			var description = R.path(["description", "_text"])(item) || "";

			// -- LINK ----
			var link = (R.path(["content:encoded", "_cdata"])(item) || "").match(/href="([^"]+)"/)[1];

			// -- IMAGE ----
			var imageUrl = (R.path(["content:encoded", "_cdata"])(item) || "").match(/src="([^"]+)"/)[1];

			var image = imageUrl ? {
				upload: imageUrl,
				fileName: imageUrl.slice(imageUrl.lastIndexOf("/") + 1),
				contentType: "image/jpeg"
			} : undefined;

			// -- DATE ----
			var year = "";
			var setYear = function setYear(c) {
				if (c._attributes.domain === "years") {
					year = c._cdata;
				}
			};

			if (item.category) {
				if (item.category.forEach) {
					item.category.forEach(setYear);
				} else {
					setYear(item.category);
				}
			}

			var approximateDate = "";
			if (year) {
				approximateDate = new Date(parseInt(year, 10), 0).toISOString();
			} else {
				approximateDate = new Date().toISOString();
			}

			// -- CATEGORY ----
			var category = [];
			var addCategory = function addCategory(c) {
				if (c._attributes.domain === "publicationtype") {
					category.push(c._cdata);
				}
			};

			if (item.category) {
				if (item.category.forEach) {
					item.category.forEach(addCategory);
				} else {
					addCategory(item.category);
				}
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
				description: description,
				link: link,
				image: image,
				approximateDate: approximateDate,
				category: category,
				featured: featured
			});

			if (featured) {
				return {
					title: title,
					description: description,
					link: link,
					image: image,
					approximateDate: approximateDate,
					category: category,
					featured: featured
				};
			} else {
				return null;
			}
		});

		return inputs.reduce(function (p, input) {
			return p.then(function () {
				return input ? createPublication(input) : Promise.resolve();
			});
		}, Promise.resolve());
	};
};