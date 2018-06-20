"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t", "\n"], ["\n\t", "\n"]);

var _styledComponents = require("styled-components");

var _vars = require("./vars");

var vars = _interopRequireWildcard(_vars);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _util = require("./lib/util");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var textMargins = (0, _util.objMap)(vars.font.size, function (key, val) {
	return val + " 0";
});

var defaultGlobalStyles = (0, _styledComponents.css)(["*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;}html{min-height:100%;position:relative;}body{background-color:", ";font-family:", ";", " color:", ";margin:0;", " line-height:1.5;text-rendering:optimizeLegibility;}a,a:hover,a:visited,a:active{text-decoration:none;color:currentColor;}p,h1,h2,h3,h4{", "}img{vertical-align:bottom;}@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Lora:400,700|Montserrat:400,600');p,ul,ol{font-family:\"Lora\",serif;font-size:1.0em;}p{a,a:hover,a:visited,a:active{text-decoration:underline;font-weight:bold;}a:hover,a:active{opacity:0.7;}img{max-width:100%;}}ul,ol,li{", ";}ul,ol,li{margin-left:1.5em;}h1,h2,h3{display:inline-block;:after{padding:0.1em 0;content:'';display:block;width:5em;border-bottom:0.4em solid ", ";}}hr{border:0;border-top:0.4em solid ", ";margin:2em 0;}"], vars.colors.bg, vars.font.family, mixins.bpEach("font-size", vars.font.size), vars.colors.text, mixins.bpEither("margin-bottom", vars.dim.footer.height), mixins.bpEach("margin", textMargins), mixins.bpEach("margin", textMargins), vars.colors.bgdark, vars.colors.bgdark);

// --------------------------------------------------

exports.default = function () {
	return (0, _styledComponents.injectGlobal)(_templateObject, defaultGlobalStyles);
};