"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Boxes = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tgrid-gap: 1em;\n\t"], ["\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t\tgrid-gap: 1em;\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\tmargin-bottom: 1em;\n\t"], ["\n\t\tmargin-bottom: 1em;\n\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\tpadding-top: ", ";\n\t"], ["\n\t\tpadding-top: ", ";\n\t"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n\t\tpadding-top: 50%;\n\t"], ["\n\t\tpadding-top: 50%;\n\t"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n\t\tpadding-top: ", ";\n\t\tposition: relative;\n\t"], ["\n\t\tpadding-top: ", ";\n\t\tposition: relative;\n\t"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n\t\t", "\n\t"], ["\n\t\t", "\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("../../style/vars");

var vars = _interopRequireWildcard(_vars);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: "Boxes__Wrapper"
})(["", " color:white;"], mixins.bp.sm.min(_templateObject));

var BoxWrapper = _styledComponents2.default.a.withConfig({
	displayName: "Boxes__BoxWrapper"
})(["background-color:", ";display:block;", ";"], _ramda2.default.path(["theme", "nav"]), mixins.xs(_templateObject2));

var paddingTop = "66.7%";

var Image = _styledComponents2.default.div.withConfig({
	displayName: "Boxes__Image"
})(["", " ", " ", ""], mixins.bgImage, mixins.bp.sm.min(_templateObject3, paddingTop), mixins.xs(_templateObject4));

var TextWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Boxes__TextWrapper"
})(["", ";"], mixins.bp.sm.min(_templateObject5, paddingTop));

var TextInner = _styledComponents2.default.div.withConfig({
	displayName: "Boxes__TextInner"
})(["", " padding:1em;"], mixins.bp.sm.min(_templateObject6, mixins.contained()));

var Title = _styledComponents2.default.div.withConfig({
	displayName: "Boxes__Title"
})(["font-family:", ";font-weight:bold;font-size:1.1em;"], vars.font.heading);

var Text = _styledComponents2.default.div.withConfig({
	displayName: "Boxes__Text"
})(["font-family:", ";font-size:0.9em;"], vars.font.paragraph);

var Box = function Box(_ref) {
	var image = _ref.image,
	    title = _ref.title,
	    text = _ref.text,
	    link = _ref.link;
	return _react2.default.createElement(
		BoxWrapper,
		{ href: link },
		_react2.default.createElement(Image, { src: image && image.url }),
		_react2.default.createElement(
			TextWrapper,
			null,
			_react2.default.createElement(
				TextInner,
				null,
				_react2.default.createElement(
					Title,
					null,
					title
				),
				_react2.default.createElement(
					Text,
					null,
					text
				)
			)
		)
	);
};

Box.displayName = "Box";
var things = [{
	title: "Watch",
	text: "Watch things",
	image: {
		url: "https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"
	},
	link: "#"
}, {
	title: "Read",
	text: "Read things",
	image: {
		url: "https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"
	},
	link: "#"
}, {
	title: "Listen",
	text: "Listen to things",
	image: {
		url: "https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"
	},
	link: "#"
}];

var Boxes = exports.Boxes = function Boxes() {
	return _react2.default.createElement(
		Wrapper,
		null,
		things.map(function (o, i) {
			return _react2.default.createElement(Box, (0, _extends3.default)({}, o, { key: i }));
		})
	);
};
Boxes.displayName = "Boxes";