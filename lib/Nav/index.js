"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["padding: 0 1em; "], ["padding: 0 1em; "]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["padding: 0 3em; "], ["padding: 0 3em; "]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t"], ["\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["display: none;"], ["display: none;"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n\t\tposition: absolute;\n\t\tmax-width: 60%;\n\t"], ["\n\t\tposition: absolute;\n\t\tmax-width: 60%;\n\t"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Links = require("./Links");

var _Links2 = _interopRequireDefault(_Links);

var _Burger = require("./Burger");

var _Burger2 = _interopRequireDefault(_Burger);

var _theme = require("./theme");

var _theme2 = _interopRequireDefault(_theme);

var _codogoUtilityFunctions = require("codogo-utility-functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var NavContainer = _styledComponents2.default.div.withConfig({
	displayName: "Nav__NavContainer"
})(["", ";", ";", " z-index:10;"], function (props) {
	return props.fixed && "\n\t\t\tposition: fixed;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\ttop: 0;\n\t\t";
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("height", props.height);
}, function (props) {
	return props.clear && "height: 0 !important;";
});

var NavWrapper = _styledComponents2.default.nav.withConfig({
	displayName: "Nav__NavWrapper"
})(["z-index:5;left:0;position:absolute;right:0;top:0;", ";", ";", ";", ";", ";"], function (props) {
	return !props.clear && (0, _codogoUtilityFunctions.bpEither)("background-color", props.backgroundColor);
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("height", props.height);
}, (0, _codogoUtilityFunctions.sm)(_templateObject), _codogoUtilityFunctions.bp.md.min(_templateObject2), function (props) {
	return props.shadow && (0, _codogoUtilityFunctions.shadow)(1);
});

var NavInner = _styledComponents2.default.div.withConfig({
	displayName: "Nav__NavInner"
})(["width:100%;height:100%;position:relative;", ";"], _codogoUtilityFunctions.bp.sm.min(_templateObject3));

var MobileContent = _styledComponents2.default.div.withConfig({
	displayName: "Nav__MobileContent"
})(["", ";", ";"], _codogoUtilityFunctions.bp.sm.min(_templateObject4), (0, _codogoUtilityFunctions.contained)());

var Overlay = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Overlay"
})(["", ";", ";transition:0.3s all ease-out;", ";"], (0, _codogoUtilityFunctions.contained)(), function (_ref) {
	var open = _ref.open;
	return open ? (0, _codogoUtilityFunctions.shadow)(1) : "";
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("background-color", props.backgroundColor);
});

var BurgerWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Nav__BurgerWrapper"
})(["position:absolute;right:0;top:50%;margin-top:-20px;"]);

var Logo = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Logo"
})(["align-items:center;display:flex;font-family:", ";max-width:30%;order:1;padding-left:1em;", ";", ";"], function (props) {
	return props.font;
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("height", props.height);
}, (0, _codogoUtilityFunctions.xs)(_templateObject5));

// -------------------------------

var Nav = function (_React$Component) {
	(0, _inherits3.default)(Nav, _React$Component);

	function Nav(props) {
		(0, _classCallCheck3.default)(this, Nav);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

		_this.CloseMenu = function () {
			_this.setState({
				open: false
			});
		};

		_this.ToggleMenu = function () {
			_this.setState({
				open: !_this.state.open
			});
		};

		_this.state = {
			open: false
		};
		return _this;
	}

	(0, _createClass3.default)(Nav, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    backgroundColor = _props.backgroundColor,
			    children = _props.children,
			    clear = _props.clear,
			    fixed = _props.fixed,
			    font = _props.font,
			    height = _props.height,
			    highlightColor = _props.highlightColor,
			    shadow = _props.shadow,
			    logo = _props.logo,
			    links = _props.links;
			var open = this.state.open;


			return _react2.default.createElement(
				NavContainer,
				{ height: height, fixed: fixed, clear: clear },
				_react2.default.createElement(
					NavWrapper,
					{
						height: height,
						backgroundColor: backgroundColor,
						clear: clear,
						shadow: shadow
					},
					_react2.default.createElement(
						NavInner,
						null,
						_react2.default.createElement(
							_Links2.default,
							{
								theme: Object.assign({}, this.props),
								open: open,
								close: this.CloseMenu,
								links: links
							},
							children
						),
						_react2.default.createElement(
							MobileContent,
							null,
							_react2.default.createElement(Overlay, {
								backgroundColor: backgroundColor,
								open: open
							}),
							_react2.default.createElement(
								BurgerWrapper,
								{ onClick: this.ToggleMenu },
								_react2.default.createElement(_Burger2.default, {
									highlightColor: highlightColor,
									backgroundColor: backgroundColor,
									open: open
								})
							)
						),
						logo && _react2.default.createElement(
							Logo,
							{ font: font, height: height },
							logo
						)
					)
				)
			);
		}
	}]);
	return Nav;
}(_react2.default.Component);

Nav.defaultProps = _theme2.default;
Nav.displayName = "Nav";
exports.default = Nav;