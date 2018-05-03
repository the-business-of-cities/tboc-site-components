"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-direction: column;\n\t\tfont-size: 0.75em;\n\t\tpadding: 1.25em;\n\t\talign-items: flex-start\n\t"], ["\n\t\tflex-direction: column;\n\t\tfont-size: 0.75em;\n\t\tpadding: 1.25em;\n\t\talign-items: flex-start\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\tmargin-bottom: 1em;\n\t"], ["\n\t\tmargin-bottom: 1em;\n\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\tpadding: 0.7em;\n\t"], ["\n\t\tpadding: 0.7em;\n\t"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n\t\tright: 0.17em;\n\t"], ["\n\t\tright: 0.17em;\n\t"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _recompose = require("recompose");

var _fetchJsonp = require("fetch-jsonp");

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

var _toolbox = require("src/components/common/toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var gutter = "0.75em";

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: "SubscribeBanner__Wrapper"
})(["background-color:", ";color:white;position:fixed;bottom:0;left:0;right:0;padding:", ";display:flex;flex-direction:row;align-items:center;justify-content:center;z-index:1;line-height:1;transform:translateY(", ");transition:0.2s ease-in transform;font-size:0.8em;", " ", ";"], R.path(["theme", "nav"]), gutter, function (props) {
	return props.visible ? "0" : "100%";
}, mixins.shadow(1), mixins.xs(_templateObject));

var Text = _styledComponents2.default.div.withConfig({
	displayName: "SubscribeBanner__Text"
})(["margin-right:", ";", ";"], gutter, mixins.xs(_templateObject2));

var Input = _styledComponents2.default.input.withConfig({
	displayName: "SubscribeBanner__Input"
})(["font-size:1em;font-family:inherit;margin-right:", ";color:white;background-color:rgba(255,255,255,0.2);outline:0;border:0;line-height:1;padding:0.33em 0.67em;width:16em;", " &::placeholder{color:rgba(255,255,255,0.5);}"], gutter, mixins.xs(_templateObject3));

var CloseButton = _styledComponents2.default.div.withConfig({
	displayName: "SubscribeBanner__CloseButton"
})(["position:absolute;top:0;right:0.5em;bottom:0;display:flex;align-items:center;font-size:1.5em;padding:0.5em;cursor:pointer;", ";"], mixins.xs(_templateObject4));

var email = "testing1@email.com";

var enhance = (0, _recompose.compose)((0, _recompose.withState)("visible", "setVisible", true), (0, _recompose.withState)("email", "setEmail", ""), (0, _recompose.withHandlers)({
	hide: function hide(_ref) {
		var setVisible = _ref.setVisible;
		return function () {
			return setVisible(false);
		};
	},
	submit: function submit(_ref2) {
		var email = _ref2.email,
		    setVisible = _ref2.setVisible;
		return function () {
			return (0, _fetchJsonp2.default)("https://thebusinessofcities.us14.list-manage.com/subscribe/post-json?" + "u=b767bfc077f3ac0858f7fd6d1" + "&amp;id=9565d842da" + ("&EMAIL=" + encodeURIComponent(email)), {
				jsonpCallback: "c",
				timeout: 20000
			}).then(function (x) {
				return x.json();
			}).then(function (_ref3) {
				var result = _ref3.result,
				    msg = _ref3.msg;

				if (result && msg) {
					if (result === "success") {
						window.alert("Success! " + msg);
						setVisible(false);
					} else if (result === "error") {
						window.alert("Subscription failed. " + msg);
					} else {
						throw new Error();
					}
				} else {
					throw new Error();
				}
			}).catch(function () {
				window.alert("Something went wrong. Please try again another time.");
			});
		};
	}
}), (0, _recompose.withHandlers)({
	onChangeEmail: function onChangeEmail(_ref4) {
		var setEmail = _ref4.setEmail;
		return function (e) {
			setEmail(e.target.value);
		};
	},
	onKeyDownEmail: function onKeyDownEmail(_ref5) {
		var submit = _ref5.submit;
		return function (e) {
			if (e.keyCode === 13) {
				submit();
			}
		};
	}
}));

var Comp = function Comp(_ref6) {
	var hide = _ref6.hide,
	    visible = _ref6.visible,
	    submit = _ref6.submit,
	    email = _ref6.email,
	    onChangeEmail = _ref6.onChangeEmail,
	    onKeyDownEmail = _ref6.onKeyDownEmail;
	return React.createElement(
		Wrapper,
		{ visible: visible },
		React.createElement(
			Text,
			null,
			"Sign up to our newsletter for weekly updates:"
		),
		React.createElement(
			"div",
			null,
			React.createElement(Input, {
				placeholder: "Your email address",
				onChange: onChangeEmail,
				onKeyDown: onKeyDownEmail,
				value: email
			}),
			React.createElement(
				_toolbox.Button,
				{ color: "white", onClick: submit },
				"Subscribe"
			)
		),
		React.createElement(
			CloseButton,
			{ onClick: hide },
			React.createElement(_toolbox.Icon, { type: "times" })
		)
	);
};

Comp.displayName = "Comp";
exports.default = enhance(Comp);