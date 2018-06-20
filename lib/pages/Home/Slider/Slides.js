"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("../../../components/toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("../../../style/vars");

var vars = _interopRequireWildcard(_vars);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _nukaCarousel = require("nuka-carousel");

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// --------------------------------------------------

var padding = 1;
var titleFontSize = 1.1;
var titleLineHeight = 1.3;
var textFontSize = 0.9;
var textLineHeight = 1.4;
var boxHeight = 2 * (padding + titleFontSize * titleLineHeight + textFontSize * textLineHeight);

// --------------------------------------------------

var SlideInner = (0, _styledComponents2.default)(_toolbox.MaybeLink).withConfig({
	displayName: "Slides__SlideInner"
})(["display:block;background-color:", ";padding:", "em;height:", "em;position:absolute;bottom:0;left:0;color:", ";&:hover{color:", ";}"], _ramda2.default.path(["theme", "nav"]), padding, boxHeight, _ramda2.default.path(["theme", "bg"]), _ramda2.default.path(["theme", "bgdark"]));

var SlideTitle = _styledComponents2.default.div.withConfig({
	displayName: "Slides__SlideTitle"
})(["font-weight:bold;font-size:", "em;font-family:", ";display:block;line-height:", ";max-height:", "em;overflow:hidden;", ":hover &{text-decoration:underline;}"], titleFontSize, vars.font.heading, titleLineHeight, 2 * titleLineHeight, SlideInner);

var SlideText = _styledComponents2.default.div.withConfig({
	displayName: "Slides__SlideText"
})(["font-size:", "em;font-family:", ";& p{margin:0;&:last-child{line-height:", ";height:", "em;position:relative;overflow:hidden;&:after{content:\"\u25B6\";position:absolute;bottom:0;right:0;width:70%;height:", "em;text-align:right;background:linear-gradient( to right,transparent,", " 50% );}}}"], textFontSize, vars.font.paragraph, textLineHeight, 2 * textLineHeight, textLineHeight, _ramda2.default.path(["theme", "nav"]));

var SlideImage = _styledComponents2.default.div.withConfig({
	displayName: "Slides__SlideImage"
})(["", " height:14em;"], mixins.bgImage);

// --------------------------------------------------

var Slides = function Slides(_ref) {
	var slideContents = _ref.slideContents,
	    sliderSettings = _ref.sliderSettings;
	return _react2.default.createElement(
		_nukaCarousel2.default,
		{
			autoplay: true,
			dragging: true,
			renderBottomCenterControls: function renderBottomCenterControls() {
				return null;
			},
			slidesToShow: 3
		},
		slideContents.map(function (_ref2, i) {
			var image = _ref2.image,
			    name = _ref2.name,
			    title = _ref2.title,
			    descriptionHtml = _ref2.descriptionHtml,
			    to = _ref2.to,
			    href = _ref2.href,
			    slug = _ref2.slug;
			return _react2.default.createElement(
				"div",
				{ key: slug, style: { width: "100%", height: "30vh" } },
				_react2.default.createElement("img", {
					src: image && image.url,
					style: {
						width: "100%",
						height: "100%",
						objectFit: "cover",
						position: "absolute"
					}
				}),
				_react2.default.createElement(
					SlideInner,
					{ to: to, href: href },
					_react2.default.createElement(
						SlideTitle,
						null,
						title || name
					),
					_react2.default.createElement(SlideText, {
						dangerouslySetInnerHTML: {
							__html: descriptionHtml
						}
					})
				)
			);
		})
	);
};

Slides.displayName = "Slides";
exports.default = Slides;