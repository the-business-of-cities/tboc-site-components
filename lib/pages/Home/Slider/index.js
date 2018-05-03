"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _recompose = require("recompose");

var _vars = require("src/components/style/vars");

var vars = _interopRequireWildcard(_vars);

var _Arrow = require("./Arrow");

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Slides = require("./Slides");

var _Slides2 = _interopRequireDefault(_Slides);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _data = require("src/data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// --------------------------------------------------

var snapshotting = window.location.host.includes("localhost:") && parseInt(window.location.host.replace("localhost:", ""), 10) > 9999;

// --------------------------------------------------

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: "Slider__Wrapper"
})(["transition:0.1s linear all;max-height:21.4em;background-color:", ";& > div{opacity:", ";}"], snapshotting ? vars.colors.bgdark : "transparent", snapshotting ? 0 : 1);

var sliderSettings = Object.assign({
	dots: true,
	speed: 500,
	slidesToScroll: 1,
	arrows: true,
	swipe: true,
	focusOnSelect: true,
	centerMode: true,
	centerPadding: 0
}, snapshotting ? { slidesToShow: 1 } : {
	responsive: [{
		breakpoint: 768,
		settings: {
			slidesToShow: 1
		}
	}, {
		breakpoint: 100000,
		settings: {
			slidesToShow: 3
		}
	}]
}, {
	infinite: true,
	nextArrow: React.createElement(_Arrow2.default, { next: true }),
	prevArrow: React.createElement(_Arrow2.default, { prev: true })
});

var slideContents = _data2.default.homeBanner.map(function (_ref) {
	var slug = _ref.slug,
	    contentType = _ref.contentType,
	    link = _ref.link;

	if (contentType === "event") {
		return Object.assign({}, _data2.default.eventsMap[slug], {
			to: "/events/" + slug
		});
	} else if (contentType === "news") {
		return Object.assign({}, _data2.default.newsMap[slug], {
			to: "/blog/" + slug
		});
	} else if (contentType === "publication") {
		return Object.assign({}, _data2.default.publicationsMap[slug], {
			href: link
		});
	} else {
		return {};
	}
});

var Slider = function Slider() {
	return React.createElement(
		Wrapper,
		null,
		React.createElement(_Slides2.default, { sliderSettings: sliderSettings, slideContents: slideContents })
	);
};

Slider.displayName = "Slider";
var enhance = (0, _recompose.compose)();

exports.default = enhance(Slider);