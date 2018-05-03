"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("src/components/common/toolbox");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _data = require("src/data");

var _data2 = _interopRequireDefault(_data);

var _Generic = require("./Generic");

var _Generic2 = _interopRequireDefault(_Generic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var CategoryWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Partners__CategoryWrapper"
})(["margin-bottom:1em;"]);

console.log("Data", _data2.default);

//const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));

var Partners = function Partners(props) {
	return React.createElement(
		_Generic2.default,
		props,
		_data2.default.partnerCategories.map(function (cat) {
			return React.createElement(
				CategoryWrapper,
				{ key: cat.title },
				React.createElement(
					"h2",
					null,
					cat.title
				),
				React.createElement(_toolbox.LogoGrid, {
					logos: cat.partner.map(function (partner) {
						return {
							image: partner.fields.image,
							link: partner.fields.website
						};
					})
				})
			);
		})
	);
};

Partners.displayName = "Partners";
exports.default = Partners;