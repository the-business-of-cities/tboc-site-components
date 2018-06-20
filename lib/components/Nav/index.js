"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["display: none;"], ["display: none;"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: none;\n\t"], ["\n\t\tdisplay: none;\n\t"]);

var _toolbox = require("../toolbox");

var _recompose = require("recompose");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _vars = require("../../style/vars");

var vars = _interopRequireWildcard(_vars);

var _Links = require("./Links");

var _Links2 = _interopRequireDefault(_Links);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _Burger = require("./Burger");

var _Burger2 = _interopRequireDefault(_Burger);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Wrapper = _styledComponents2.default.nav.withConfig({
	displayName: "Nav__Wrapper"
})(["", "  ", " background:black;background-color:", ";color:white;left:0;right:0;top:0;z-index:10;& a{color:white !important;}"], mixins.bp.xs.min(_templateObject, mixins.shadow(0)), function (props) {
	return mixins.bpEither("height", props.theme.dimensions.nav.height);
}, function (props) {
	return props.theme.colors.nav;
});

var Inner = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Inner"
})(["width:100%;height:100%;position:relative;max-width:", "px;margin:0 auto;"], vars.bps.lg.min);

var MobileStuff = _styledComponents2.default.div.withConfig({
	displayName: "Nav__MobileStuff"
})(["", ";", ";"], mixins.bp.sm.min(_templateObject2), mixins.contained());

var Dark = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Dark"
})(["", " position:fixed;background:", ";"], mixins.contained(), mixins.transparent(0.5));

var Overlay = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Overlay"
})(["", ";", ";transition:0.3s all ease-out;background-color:", ";"], mixins.contained(), function (_ref) {
	var open = _ref.open;
	return open || true ? mixins.shadow(1) : "";
}, function (props) {
	return props.theme.colors.bg;
});

var BurgerWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Nav__BurgerWrapper"
})(["position:absolute;right:0;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;z-index:1;"]);

// -----------------------------


// -----------------------------

var Line = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Line"
})(["", ";height:1.5px;background:white;position:absolute;left:0;right:0;bottom:", ";display:none;"], mixins.xs(_templateObject3), function (props) {
	return props.theme.dimensions.nav.linksHeight;
});

var BackgroundColorHack = _styledComponents2.default.div.withConfig({
	displayName: "Nav__BackgroundColorHack"
})(["", ";background-color:", ";position:fixed;left:0;right:0;height:", "px;top:0;"], mixins.xs(_templateObject3), function (props) {
	return props.theme.colors.bg;
}, mixins.num(vars.dim.nav.height.other) - mixins.num(vars.dim.nav.linksHeight));

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
	var links = _ref5.links,
	    props = (0, _objectWithoutProperties3.default)(_ref5, ["links"]);
	return _react2.default.createElement(
		Wrapper,
		null,
		_react2.default.createElement(
			Inner,
			null,
			_react2.default.createElement(
				MobileStuff,
				null,
				_react2.default.createElement(
					_toolbox.Fade,
					{ visible: props.open },
					_react2.default.createElement(Dark, { onClick: props.closeMenu })
				)
			),
			_react2.default.createElement(BackgroundColorHack, null),
			_react2.default.createElement(_Links2.default, { close: props.closeMenu, open: props.open, links: links }),
			_react2.default.createElement(
				MobileStuff,
				null,
				_react2.default.createElement(Overlay, { open: props.open }),
				_react2.default.createElement(
					BurgerWrapper,
					{ onClick: props.toggleMenu },
					_react2.default.createElement(_Burger2.default, {
						open: props.open,
						padding: mixins.num(vars.dim.nav.margin.xs),
						color: vars.colors.nav
					})
				)
			),
			_react2.default.createElement(_Logo2.default, null)
		),
		_react2.default.createElement(Line, null)
	);
};

Nav.displayName = "Nav";
exports.default = enhance(Nav);