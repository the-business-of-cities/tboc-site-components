"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\tborder-top: 1px solid ", ";\n\t\t&:first-child {\n\t\t}\n\t"], ["\n\t\tborder-top: 1px solid ", ";\n\t\t&:first-child {\n\t\t}\n\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\t&:hover {\n\t\t\t> div {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t"], ["\n\t\t&:hover {\n\t\t\t> div {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n\t\tpadding-left: 1em;\n\t\tfont-size: 0.9em;\n\t\topacity: 0.67;\n\t"], ["\n\t\tpadding-left: 1em;\n\t\tfont-size: 0.9em;\n\t\topacity: 0.67;\n\t"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: none;\n\t\tbackground: ", ";\n\t\tposition: absolute;\n\t\ttop: ", ";\n\t\tleft: 0;\n\t\twidth: 22em;\n\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tborder: 0;\n\t\t}\n\t"], ["\n\t\tdisplay: none;\n\t\tbackground: ", ";\n\t\tposition: absolute;\n\t\ttop: ", ";\n\t\tleft: 0;\n\t\twidth: 22em;\n\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tborder: 0;\n\t\t}\n\t"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: none;\n\t"], ["\n\t\tdisplay: none;\n\t"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require("react-router-dom");

var _routesConfig = require("src/routesConfig");

var _routesConfig2 = _interopRequireDefault(_routesConfig);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("src/components/style/vars");

var vars = _interopRequireWildcard(_vars);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var wrapperStyle = [(0, _styledComponents.css)(["transform:translateY(", "%);transition:0.3s all ease-out;", " position:absolute;left:0;right:0;top:", ";background-color:", ";align-items:center;"], function (props) {
	return props.open ? 0 : -110;
}, mixins.shadow(2), vars.dim.nav.height.xs, R.path(["theme", "nav"])), "\n\t\tposition: absolute;\n\t\tright: " + vars.dim.nav.margin.other + ";\n\t\tleft: " + vars.dim.nav.margin.other + ";\n\t\tbottom: 0;\n\t\theight: " + vars.dim.nav.linksHeight + ";\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t"];

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: "Links__Wrapper"
})(["", " ", ";margin:auto;"], mixins.xs(_templateObject, wrapperStyle[0]), mixins.bp.sm.min(_templateObject, wrapperStyle[1]));

var buttonStyle = [(0, _styledComponents.css)(["display:block;padding:0.9em ", ";font-size:0.9em;content:", ";line-height:1;&.active{font-weight:bold;background-color:", ";}"], vars.dim.nav.margin.xs, R.pipe(R.path(["theme", "nav"])), R.pipe(R.path(["theme", "nav"]), function (color) {
	return mixins.lightenColor(color, 0.1);
})), "\n\t\tdisplay: inline-block;\n\t\theight: " + vars.dim.nav.linksHeight + ";\n\t\tline-height: " + vars.dim.nav.linksHeight + ";\n\t\tpadding: 0 0.75em;\n\t\tfont-size: 0.8em;\n\t\ttext-transform: uppercase;\n\n\t\t&.active {\n\t\t\tbackground-color: rgba(255,255,255,0.3);\n\t\t}\n\n\t\t&:not(.active):hover {\n\t\t\tbackground-color: rgba(255,255,255,0.1);\n\t\t}\n\t"];

var LinkWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Links__LinkWrapper"
})(["position:relative;", " ", ";"], mixins.xs(_templateObject2, R.pipe(R.path(["theme", "nav"]), function (color) {
	return mixins.darkenColor(color, 0.2);
})), mixins.bp.sm.min(_templateObject3));

var Link = (0, _styledComponents2.default)(_reactRouterDom.NavLink).withConfig({
	displayName: "Links__Link"
})(["color:", ";", " ", ";"], R.path(["theme", "logo1"]), mixins.xs(_templateObject, buttonStyle[0]), mixins.bp.sm.min(_templateObject, buttonStyle[1]));

var DropdownLinks = _styledComponents2.default.div.withConfig({
	displayName: "Links__DropdownLinks"
})(["", " ", ";"], mixins.xs(_templateObject4), mixins.bp.sm.min(_templateObject5, R.pipe(R.path(["theme", "nav"]), mixins.lightenColor), vars.dim.nav.linksHeight));

var DropdownArrow = _styledComponents2.default.span.withConfig({
	displayName: "Links__DropdownArrow"
})(["margin-left:0.5em;font-size:0.8em;", ";"], mixins.xs(_templateObject6));

// --------------------------------------------------

exports.default = function (_ref) {
	var close = _ref.close,
	    open = _ref.open;
	return React.createElement(
		Wrapper,
		{ open: open },
		_routesConfig2.default.filter(R.prop("show")).map(function (_ref2) {
			var title = _ref2.title,
			    path = _ref2.path;
			return React.createElement(
				LinkWrapper,
				{ key: path, onClick: close },
				React.createElement(
					Link,
					{ to: path, activeClassName: "active", exact: true },
					title,
					" ",
					path === "/work" && React.createElement(
						DropdownArrow,
						null,
						"\u25BC"
					)
				),
				path === "/work" ? React.createElement(
					DropdownLinks,
					null,
					_routesConfig2.default.filter(R.prop("service")).map(function (_ref3) {
						var title = _ref3.title,
						    path = _ref3.path;
						return React.createElement(
							LinkWrapper,
							{ key: path },
							React.createElement(
								Link,
								{
									to: path,
									activeClassName: "active",
									exact: true
								},
								title
							)
						);
					})
				) : null
			);
		})
	);
};