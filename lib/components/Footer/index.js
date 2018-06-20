"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-wrap: wrap;\n\t\theight: auto;\n\t"], ["\n\t\tflex-wrap: wrap;\n\t\theight: auto;\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 0;\n\t\tfont-size: 0.9em;\n\t"], ["\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 0;\n\t\tfont-size: 0.9em;\n\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\twidth: 100%;\n\t\tpadding: 4px;\n\t"], ["\n\t\twidth: 100%;\n\t\tpadding: 4px;\n\t"]);

var _toolbox = require("../toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("../../style/vars");

var vars = _interopRequireWildcard(_vars);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Wrapper = _styledComponents2.default.footer.withConfig({
	displayName: "Footer__Wrapper"
})(["background-color:", ";position:absolute;right:0;left:0;bottom:0;overflow:hidden;"], _ramda2.default.path(["theme", "footer"]));

var Inner = _styledComponents2.default.div.withConfig({
	displayName: "Footer__Inner"
})(["", ";", ";align-items:center;display:flex;justify-content:space-between;color:white;max-width:", "px;margin:0 auto;", ";", ";"], mixins.bpEither("height", vars.dim.footer.height), mixins.bpEither("padding", vars.dim.nav.margin), vars.bps.lg.min, mixins.xs(_templateObject), mixins.bp.sm.min(_templateObject2));

var FooterSection = _styledComponents2.default.div.withConfig({
	displayName: "Footer__FooterSection"
})(["text-align:center;", ";"], mixins.xs(_templateObject3));

var Contact = (0, _styledComponents2.default)(FooterSection).withConfig({
	displayName: "Footer__Contact"
})(["order:0;a{color:white;&:hover{color:#ddd;text-decoration:underline;}}"]);

var Social = (0, _styledComponents2.default)(FooterSection).withConfig({
	displayName: "Footer__Social"
})(["display:flex;flex-direction:row;justify-content:center;font-size:1.5em;margin:0 -0.25em;order:1;a{color:white;margin:0 0.25em;i,&:visited{color:white !important;}&:hover{color:#ddd;}}"]);

var formatTelNumber = function formatTelNumber(num) {
	if (num.slice(0, 1) === "+" && num.length === 13) {
		return num.slice(0, 3) + " (0)" + num.slice(3, 6) + " " + num.slice(6, 9) + " " + num.slice(9, 13);
	}
	if (num.slice(0, 1) === "0" && num.length === 11) {
		return num.slice(0, 4) + " " + num.slice(4, 7) + " " + num.slice(7, 11);
	} else {
		return num;
	}
};

var socialLinks = ["email", "phone", "twitter", "facebook", "youtube", "linkedin", "podcasts", "newsletter"];
var socialIcons = {
	newsletter: "envelope",
	podcasts: "podcast",
	email: "at"
};

var Footer = function Footer(_ref) {
	var data = _ref.data;

	var socialLinksData = Object.assign({}, data, {
		emailLink: "mailto:" + data.email,
		phoneLink: "tel:" + data.telephone
	});

	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			Inner,
			null,
			_react2.default.createElement(
				Contact,
				null,
				data.footerText
			),
			_react2.default.createElement(
				Social,
				null,
				socialLinks.map(function (str) {
					return socialLinksData[str + "Link"] ? _react2.default.createElement(
						"a",
						{
							key: str,
							href: socialLinksData[str + "Link"],
							style: str === "phone" ? {
								marginRight: "0.5em",
								paddingRight: "0.75em",
								borderRight: "1px solid white"
							} : undefined
						},
						_react2.default.createElement(_toolbox.Icon, { type: socialIcons[str] || str })
					) : null;
				})
			)
		)
	);
};

Footer.displayName = "Footer";
exports.default = Footer;