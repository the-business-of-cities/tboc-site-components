"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TileTitle = exports.TileImage = exports.TileContent = exports.TileInner = exports.TileWrapper = exports.TilesWrapper = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["width: 100%"], ["width: 100%"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["padding : 0"], ["padding : 0"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("../../style/vars");

var vars = _interopRequireWildcard(_vars);

var _misc = require("./misc");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var TilesWrapper = exports.TilesWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Tiles__TilesWrapper"
})(["", ";"], mixins.clearfix);

var TileWrapper = exports.TileWrapper = (0, _styledComponents2.default)(_misc.GridCell).withConfig({
	displayName: "Tiles__TileWrapper"
})(["width:", ";width:50%;", ";float:left;"], function (props) {
	return props.small ? "50%" : "100%";
}, mixins.xs(_templateObject));

var TileInner = exports.TileInner = (0, _styledComponents2.default)(_misc.GridCell).withConfig({
	displayName: "Tiles__TileInner"
})(["position:relative;", ";margin-bottom:1em;"], mixins.bp.sm.min(_templateObject2));

var TileContent = exports.TileContent = _styledComponents2.default.div.withConfig({
	displayName: "Tiles__TileContent"
})(["background:", ";margin-top:-2em;left:0;margin-right:1.5em;margin-bottom:1em;padding:0.5em 1em;p{font-size:0.95em;}"], vars.colors.bgdark);

var TileImage = exports.TileImage = _styledComponents2.default.div.withConfig({
	displayName: "Tiles__TileImage"
})(["margin-left:1.5em;"]);

var TileTitle = exports.TileTitle = _styledComponents2.default.h3.withConfig({
	displayName: "Tiles__TileTitle"
})(["margin-bottom:0;:hover,:active{opacity:0.7;}:after{content:\"\";display:block;width:5em;border-bottom:0.4em solid rgba(0,0,0,0.15);}"]);