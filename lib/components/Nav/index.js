"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["display: none;"], ["display: none;"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\tbottom: 0;\n\t"], ["\n\t\tbottom: 0;\n\t"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n\t\tbottom: ", ";\n\t"], ["\n\t\tbottom: ", ";\n\t"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: none;\n\t"], ["\n\t\tdisplay: none;\n\t"]);

var _toolbox = require("../toolbox");

var _reactRouterDom = require("react-router-dom");

var _recompose = require("recompose");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("src/components/style/vars");

var vars = _interopRequireWildcard(_vars);

var _util = require("src/lib/util");

var _Links = require("./Links");

var _Links2 = _interopRequireDefault(_Links);

var _Burger = require("./Burger");

var _Burger2 = _interopRequireDefault(_Burger);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _data = require("src/data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Wrapper = _styledComponents2.default.nav.withConfig({
	displayName: "Nav__Wrapper"
})(["", "  ", " background-color:", ";left:0;position:fixed;right:0;top:0;z-index:10;color:white;& a{color:white !important;}"], mixins.bp.xs.min(_templateObject, mixins.shadow(0)), mixins.bpEither("height", vars.dim.nav.height), R.path(["theme", "nav"]));

var Inner = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Inner"
})(["width:100%;height:100%;position:relative;max-width:", "px;margin:0 auto;"], vars.bps.lg.min);

var MobileStuff = _styledComponents2.default.div.withConfig({
	displayName: "Nav__MobileStuff"
})(["", " ", ";"], mixins.bp.sm.min(_templateObject2), mixins.contained());

var Dark = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Dark"
})(["", " position:fixed;background:", ";"], mixins.contained(), mixins.transparent(0.5));

var Overlay = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Overlay"
})(["", " ", " transition:0.3s all ease-out;background-color:", ";"], mixins.contained(), function (_ref) {
	var open = _ref.open;
	return open || true ? mixins.shadow(1) : "";
}, R.path(["theme", "bg"]));

var BurgerWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Nav__BurgerWrapper"
})(["position:absolute;right:0;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;z-index:1;"]);

var IndexLink = function IndexLink(props) {
	return React.createElement(_reactRouterDom.Link, (0, _extends3.default)({ to: "/" }, props));
};

IndexLink.displayName = "IndexLink";
var LogoWrapper = (0, _styledComponents2.default)(IndexLink).withConfig({
	displayName: "Nav__LogoWrapper"
})(["position:absolute;top:0;", " display:flex;flex-direction:row;align-items:center;", " ", ";"], mixins.bpEither("left", vars.dim.nav.margin), mixins.xs(_templateObject3), mixins.bp.sm.min(_templateObject4, vars.dim.nav.linksHeight));

var LogoText = _styledComponents2.default.div.withConfig({
	displayName: "Nav__LogoText"
})(["font-size:2em;font-family:", ";text-transform:uppercase;"], vars.font.title.family);

var LogoImage = _styledComponents2.default.img.withConfig({
	displayName: "Nav__LogoImage"
})(["height:80%;width:auto;"]);

var Logo = function Logo(props) {
	return React.createElement(
		LogoWrapper,
		{ to: "/" },
		_data2.default.logo ? React.createElement(LogoImage, { src: _data2.default.logo.url }) : React.createElement(
			LogoText,
			null,
			"The Business of Cities"
		)
	);
};

Logo.displayName = "Logo";
var Line = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Line"
})(["", " height:1.5px;background:white;position:absolute;left:0;right:0;bottom:", ";display:none;"], mixins.xs(_templateObject5), vars.dim.nav.linksHeight);

var BackgroundColorHack = _styledComponents2.default.div.withConfig({
	displayName: "Nav__BackgroundColorHack"
})(["", " background-color:", ";position:fixed;left:0;right:0;height:", "px;top:0;"], mixins.xs(_templateObject5), R.path(["theme", "bg"]), mixins.num(vars.dim.nav.height.other) - mixins.num(vars.dim.nav.linksHeight));

// --------------------------------------------------

var enhance = (0, _recompose.compose)((0, _recompose.withState)("open", "setOpen", false), (0, _recompose.withHandlers)({
	openMenu: function openMenu(_ref2) {
		var setOpen = _ref2.setOpen;
		return function () {
			return setOpen(true);
		};
	},
	closeMenu: function closeMenu(_ref3) {
		var setOpen = _ref3.setOpen;
		return function () {
			return setOpen(false);
		};
	},
	toggleMenu: function toggleMenu(_ref4) {
		var setOpen = _ref4.setOpen,
		    open = _ref4.open;
		return function () {
			return setOpen(!open);
		};
	}
}));

var Nav = function Nav(_ref5) {
	var open = _ref5.open,
	    closeMenu = _ref5.closeMenu,
	    toggleMenu = _ref5.toggleMenu;
	return React.createElement(
		Wrapper,
		null,
		React.createElement(
			Inner,
			null,
			React.createElement(
				MobileStuff,
				null,
				React.createElement(
					_toolbox.Fade,
					{ visible: open },
					React.createElement(Dark, { onClick: closeMenu })
				)
			),
			React.createElement(BackgroundColorHack, null),
			React.createElement(_Links2.default, { close: closeMenu, open: open }),
			React.createElement(
				MobileStuff,
				null,
				React.createElement(Overlay, { open: open }),
				React.createElement(
					BurgerWrapper,
					{ onClick: toggleMenu },
					React.createElement(_Burger2.default, {
						open: open,
						padding: mixins.num(vars.dim.nav.margin.xs),
						color: vars.colors.nav
					})
				)
			),
			React.createElement(Logo, null)
		),
		React.createElement(Line, null)
	);
};

Nav.displayName = "Nav";
exports.default = enhance(Nav);