"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Partners = undefined;

var _toolbox = require("../components/toolbox");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Generic = require("./Generic");

var _Generic2 = _interopRequireDefault(_Generic);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var CategoryWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Partners__CategoryWrapper"
})(["margin-bottom:1em;"]);

// --------------------------------------------------

var Partners = exports.Partners = function Partners(props) {
	return _react2.default.createElement(
		_Generic2.default,
		props,
		props.partnerCategories.map(function (cat) {
			return _react2.default.createElement(
				CategoryWrapper,
				{ key: cat.title },
				_react2.default.createElement(
					"h2",
					null,
					cat.title
				),
				_react2.default.createElement(_toolbox.LogoGrid, {
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