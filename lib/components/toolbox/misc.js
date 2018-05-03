"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PageBody = exports.PageWrapper = exports.LineCell = exports.Line = exports.Only = exports.PSpacing = exports.Button = exports.IconButton = exports.MaybeLink = exports.ButtonWrapper = exports.Icon = exports.SmartImg = exports.FullWidthImg = exports.Para = exports.Bg = exports.Container = exports.TextCell = exports.TextBox = exports.AntiGridCell = exports.GridCell = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["border-width: 1px;"], ["border-width: 1px;"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\t& > ", " {\n\t\t\tpadding-left: 0;\n\t\t\tpadding-right: 0;\n\n\t\t}\n\t"], ["\n\t\t& > ", " {\n\t\t\tpadding-left: 0;\n\t\t\tpadding-right: 0;\n\n\t\t}\n\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)([" padding: 1.8em; "], [" padding: 1.8em; "]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require("react-router-dom");

var _util = require("src/lib/util");

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("src/components/style/vars");

var vars = _interopRequireWildcard(_vars);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var GridCell = exports.GridCell = _styledComponents2.default.div.withConfig({
	displayName: "misc__GridCell"
})(["", " ", ";"], mixins.bpEach("padding", vars.dim.gutter.half), function (p) {
	return p.flex ? "flex: " + p.flex + ";" : "";
});

// this is so bad but this site is kinda messed up anyway
var AntiGridCell = exports.AntiGridCell = _styledComponents2.default.div.withConfig({
	displayName: "misc__AntiGridCell"
})(["", ";"], mixins.bpEach("margin", vars.dim.gutter.negativeHalf));

// --------------------------------------------------

var textBoxMargins = (0, _util.objMap)(vars.font.size, function (key, val) {
	return "-" + val + " auto";
});

var TextBox = exports.TextBox = _styledComponents2.default.div.withConfig({
	displayName: "misc__TextBox"
})(["", "  ", "  ", ";"], mixins.bpEach("margin", textBoxMargins), function (p) {
	return p.bold ? "font-weight: bold;" : "";
}, function (p) {
	return p.align ? "text-align: " + p.align + ";" : "";
});

var TextCell = exports.TextCell = function TextCell(props) {
	return React.createElement(
		GridCell,
		props,
		React.createElement(
			TextBox,
			R.pick(["bold", "align"])(props),
			props.children
		)
	);
};

TextCell.displayName = "TextCell";
// --------------------------------------------------

var Container = exports.Container = _styledComponents2.default.div.withConfig({
	displayName: "misc__Container"
})(["", ";", ";margin:auto;", ";", ";", ";"], mixins.bpEach("padding", vars.dim.gutter.container), function (p) {
	return p.fullWidth ? "" : "max-width: " + (p.maxWidth || vars.dimensions.maxTextWidth) + "px";
}, function (p) {
	return p.rel ? "position: relative" : "";
}, function (p) {
	return p.border ? "border-bottom: 1px solid " + vars.colors.lines : "";
}, function (p) {
	return p.center ? "text-align: center;" : "";
});

// --------------------------------------------------

var bgTint = 0.3;
var Bg = exports.Bg = _styledComponents2.default.div.withConfig({
	displayName: "misc__Bg"
})(["", ";", ";"], function (p) {
	return p.image ? "\n\t\t\t\tbackground-image:\n\t\t\t\tlinear-gradient( rgba(0,0,0," + (p.tint || bgTint) + "), rgba(0,0,0," + (p.tint || bgTint) + ") ),\n\t\t\t\turl(" + p.image + ");\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-position: center center;\n\t\t\t" : "";
}, function (p) {
	return p.color ? "background-color: " + p.color + ";" : "";
});

// --------------------------------------------------

var Para = exports.Para = function Para(props) {
	return React.createElement(
		"div",
		null,
		props.children.split("\n").map(function (p, i) {
			return React.createElement(
				"p",
				{ key: p.slice(0, 5) + "/" + i },
				p
			);
		})
	);
};

Para.displayName = "Para";
// --------------------------------------------------

var FullWidthImg = exports.FullWidthImg = _styledComponents2.default.img.withConfig({
	displayName: "misc__FullWidthImg"
})(["width:100%;height:auto;"]);

var SmartImg = exports.SmartImg = _styledComponents2.default.div.withConfig({
	displayName: "misc__SmartImg"
})(["", ";background-color:rgba(0,0,0,0.2);background-image:url(", ");background-size:cover;background-position:center center;background-repeat:norepeat;margin-left:auto;"], function (p) {
	return p.height && p.width ? p.height <= p.width || p.unlimitedHeight ? "\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding-top: " + 100 * (p.height / p.width) + "%;\n\t\t\t" : "\n\t\t\t\twidth: " + 100 * (p.width / p.height) + "%;\n\t\t\t\tpadding-top: 100%;\n\t\t\t" : "\n\t\t\twidth: 100%;\n\t\t\tpadding-top: 100%;\n\t\t";
}, R.prop("url"));

var IconWrapper = _styledComponents2.default.i.withConfig({
	displayName: "misc__IconWrapper"
})(["font-size:", ";margin-right:", ";margin-left:", ";"], function (p) {
	return p.size || "1em";
}, function (p) {
	return p.marginRight || 0;
}, function (p) {
	return p.marginLeft || 0;
});

var Icon = exports.Icon = function Icon(props) {
	return React.createElement(IconWrapper, (0, _extends3.default)({ className: "fa fa-" + props.type }, props));
};

Icon.displayName = "Icon";
var ButtonWrapper = exports.ButtonWrapper = _styledComponents2.default.div.withConfig({
	displayName: "misc__ButtonWrapper"
})(["display:inline-block;padding:0 1em;line-height:1;height:2.6em;transition:0.1s linear background;cursor:pointer;", " display:inline-flex;flex-direction:row;justify-content:center;align-items:center;&:hover,&:visited,&:active{color:", ";}", ";"], function (p) {
	return p.margin ? "margin: 0.3em;" : "";
}, function (p) {
	return p.color || vars.colors.text;
}, function (_ref) {
	var outline = _ref.outline,
	    color = _ref.color,
	    hoverColor = _ref.hoverColor;
	return outline || true ? (0, _styledComponents.css)(["color:", ";border:1.5px solid ", ";", " background:transparent;&:hover,&:visited,&:active{color:", ";}"], color || vars.colors.text, color || vars.colors.text, mixins.xs(_templateObject), color || vars.colors.text) : "\n\t\t\t\tcolor: white;\n\t\t\t\tbackground: " + (color || vars.colors.text) + ";\n\n\t\t\t\t&:hover,\n\t\t\t\t&:visited,\n\t\t\t\t&:active {\n\t\t\t\t\tcolor: white;\n\t\t\t\t}\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: " + (hoverColor || (color ? mixins.darkenColor(color, 0.1) : mixins.lightenColor(vars.colors.text, 0.1))) + ";\n\t\t\t\t}\n\n\t\t\t";
});

var IconSpan = _styledComponents2.default.span.withConfig({
	displayName: "misc__IconSpan"
})(["display:inline-block;"]);

var MaybeLink = exports.MaybeLink = function MaybeLink(props) {
	return props.to ? React.createElement(_reactRouterDom.Link, {
		to: props.to,
		children: props.children,
		className: props.className
	}) : React.createElement("a", {
		href: props.href,
		children: props.children,
		target: props.target,
		className: props.className
	});
};

var IconButton = exports.IconButton = function IconButton(props) {
	return React.createElement(
		MaybeLink,
		{ to: props.to, href: props.href, target: props.target },
		React.createElement(
			ButtonWrapper,
			props,
			props.icon ? React.createElement(Icon, { type: props.icon, size: "1.2em", marginRight: "0.4em" }) : null,
			React.createElement(
				IconSpan,
				null,
				props.text || props.children
			)
		)
	);
};

IconButton.displayName = "IconButton";
var Button = exports.Button = IconButton;

var PSpacing = exports.PSpacing = _styledComponents2.default.div.withConfig({
	displayName: "misc__PSpacing"
})(["", ";"], mixins.bpEach("height", vars.font.size));

var Only = exports.Only = (0, _util.objMap)(vars.bps, function (key, val) {
	return function (_ref2) {
		var children = _ref2.children;
		return React.createElement(_reactResponsive2.default, {
			query: "(min-width: " + val.min + "px) and (max-width: " + val.max + "px)",
			children: children
		});
	};
});

var Line = exports.Line = _styledComponents2.default.div.withConfig({
	displayName: "misc__Line"
})(["height:1.5px;width:100%;background-color:", ";"], R.path(["theme", "text"]));

var LineCellWrapper = (0, _styledComponents2.default)(GridCell).withConfig({
	displayName: "misc__LineCellWrapper"
})(["padding-left:0;padding-right:0;"]);

var LineCell = exports.LineCell = function LineCell() {
	return React.createElement(
		LineCellWrapper,
		null,
		React.createElement(Line, null)
	);
};

LineCell.displayName = "LineCell";
// --------------------------------------------------

var PageWrapper = exports.PageWrapper = _styledComponents2.default.div.withConfig({
	displayName: "misc__PageWrapper"
})(["position:relative;overflow:hidden;", ";"], mixins.xs(_templateObject2, Container));

var PageBody = exports.PageBody = _styledComponents2.default.div.withConfig({
	displayName: "misc__PageBody"
})(["background:", ";margin-bottom:3em;padding:2.5em;padding-top:1.5em;", " h1{background:", ";padding:0;position:relative;z-index:1;margin-top:0;}"], vars.colors.bg, mixins.xs(_templateObject3), vars.colors.bg);

// --------------------------------------------------