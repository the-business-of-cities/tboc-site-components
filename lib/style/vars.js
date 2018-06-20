"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.meta = exports.dim = exports.dimensions = exports.scrollbar = exports.font = exports.colors = exports.bps = exports.breakpoints = undefined;

var _codogoUtilityFunctions = require("codogo-utility-functions");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var sm = 768;
var md = 992;
var lg = md;

var breakpoints = exports.breakpoints = {
	xs: { min: 0, max: sm - 1 },
	sm: { min: sm, max: md - 1 },
	md: { min: md, max: lg - 1 },
	lg: { min: lg, max: 100000 }
};
var bps = exports.bps = breakpoints;

var colors = exports.colors = {
	text: "#444",
	link: "#405378",
	linkHover: "#4D6491",
	nav: "#002B4E",
	footer: "#002B4E",
	bg: "#ffe4ca",
	bgdark: "#E4C1A3",
	grey: "rgba(0,0,0,0.2)",
	lines: "rgba(0,0,0,0.2)",
	borders: "rgba(0,0,0,0.2)"
};

var font = exports.font = {
	size: {
		xs: "12px",
		sm: "14px",
		md: "16px",
		lg: "17px"
	},
	title: {
		family: "Montserrat, sans-serif"
	},
	family: "Montserrat, sans-serif",
	paragraph: "\"Lora\", sans-serif",
	heading: "\"Montserrat\", sans-serif"
};

var gutter = {
	xs: 15,
	sm: 20,
	md: 30,
	lg: 30
};

var scrollbar = exports.scrollbar = {
	width: "10px",
	color: {
		track: "#ddd",
		thumb: colors.text
	}
};

var dimensions = exports.dimensions = {
	nav: {
		height: {
			xs: "50px",
			other: "110px"
		},
		margin: {
			xs: "14px",
			other: gutter.lg * 1.5 + "px"
		},
		logoHeight: {
			xs: "40px",
			other: "60px"
		},
		linksHeight: "42px"
	},
	footer: {
		height: {
			xs: "130px",
			other: "60px"
		}
	},
	gutter: {
		full: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return v + "px";
		}),
		half: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return 0.5 * v + "px";
		}),
		quarter: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return 0.25 * v + "px";
		}),
		minusQuarter: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return -0.25 * v + "px";
		}),
		tripleHalf: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return 1.5 * v + "px";
		}),
		fullNum: gutter,
		halfNum: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return 0.5 * v;
		}),
		quarterNum: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return 0.25 * v;
		}),
		tripleHalfNum: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return 1.5 * v;
		}),
		negativeHalf: (0, _codogoUtilityFunctions.objectMap)(gutter, function (k, v) {
			return -0.5 * v + "px";
		})
	},
	scrollbar: scrollbar.width,
	maxTextWidth: 800
};

dimensions.gutter.container = Object.assign({}, dimensions.gutter.full, {
	xs: dimensions.gutter.full.xs
});

var dim = exports.dim = dimensions;

var meta = exports.meta = {
	twitterUsername: "mcclowes",
	twitterCreator: "codogoio",
	googleAnalytics: "UA-89374864-3",
	googleSearch: "YQs24--DxVBln2zZc8hPo1kZFoxzc2amoF6-QWkDe7k"
};