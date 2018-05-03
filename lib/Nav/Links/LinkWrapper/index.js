"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["display: none;"], ["display: none;"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var _DropdownLinks = require("./DropdownLinks");

var _DropdownLinks2 = _interopRequireDefault(_DropdownLinks);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var linkWrapperStyle = [(0, _styledComponents.css)(["display:block;padding:", ";border-bottom:1px solid ", ";input[type=\"checkbox\"]:checked ~ div{opacity:0;max-height:0;border:none;}input[type=\"checkbox\"]:not(:checked) ~ div{margin-top:10px;}input[type=\"checkbox\"]:not(:checked) + label{transform:rotate(180deg);}"], function (props) {
	return props.padding.xs;
}, (0, _codogoUtilityFunctions.transparent)(0.1)), (0, _styledComponents.css)(["letter-spacing:0.1em;height:100%;display:flex;justify-content:center;align-items:center;"])];

var LinkContainer = _styledComponents2.default.div.withConfig({
	displayName: "LinkWrapper__LinkContainer"
})(["font-family:", ";", ";", ";", ";", ";", ";&:hover{.navlink-dropdown{display:flex;}}"], function (props) {
	return props.font;
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("text-transform", props.textTransform);
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("font-size", props.fontSize);
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("color", props.color);
}, (0, _codogoUtilityFunctions.xs)(_templateObject, linkWrapperStyle[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, linkWrapperStyle[1]));

var DropdownArrow = _styledComponents2.default.label.withConfig({
	displayName: "LinkWrapper__DropdownArrow"
})(["font-size:0.8em;position:absolute;right:1em;cursor:pointer;", ";"], _codogoUtilityFunctions.bp.sm.min(_templateObject2));

var DropdownInput = _styledComponents2.default.input.withConfig({
	displayName: "LinkWrapper__DropdownInput"
})(["position:absolute;left:-999em;", ";"], _codogoUtilityFunctions.bp.sm.min(_templateObject2));

// --------------------------------------------------

var LinkWrapper = function (_Component) {
	(0, _inherits3.default)(LinkWrapper, _Component);

	function LinkWrapper() {
		(0, _classCallCheck3.default)(this, LinkWrapper);
		return (0, _possibleConstructorReturn3.default)(this, (LinkWrapper.__proto__ || Object.getPrototypeOf(LinkWrapper)).apply(this, arguments));
	}

	(0, _createClass3.default)(LinkWrapper, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    as = _props.as,
			    to = _props.to,
			    close = _props.close,
			    dropdown = _props.dropdown,
			    theme = _props.theme,
			    i = _props.i,
			    border = _props.border;


			return _react2.default.createElement(
				LinkContainer,
				{
					padding: theme.padding,
					color: theme.color,
					textTransform: theme.textTransform,
					font: theme.font,
					fontSize: theme.fontSize
				},
				_react2.default.createElement(
					_Link2.default,
					{
						as: as,
						to: to,
						href: to,
						onClick: close,
						theme: theme,
						border: border
					},
					this.props.content
				),
				dropdown && _react2.default.createElement(DropdownInput, {
					type: "checkbox",
					name: "one",
					id: "item-" + i,
					defaultChecked: true
				}),
				dropdown && _react2.default.createElement(
					DropdownArrow,
					{ htmlFor: "item-" + i },
					"\u25BC"
				),
				dropdown && _react2.default.createElement(_DropdownLinks2.default, {
					close: close,
					dropdown: dropdown,
					theme: theme
				})
			);
		}
	}]);
	return LinkWrapper;
}(_react.Component);

LinkWrapper.displayName = "LinkWrapper";
exports.default = LinkWrapper;