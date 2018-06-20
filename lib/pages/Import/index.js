"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _contentfulManagement = require("contentful-management");

var _recompose = require("recompose");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _toolbox = require("../components/toolbox");

var _publications = require("./publications");

var _news = require("./news");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Input = _styledComponents2.default.textarea.withConfig({
	displayName: "Import__Input"
})(["width:25em;height:15em;"]);

var enhance = (0, _recompose.compose)((0, _recompose.withState)("space", "setSpace", null), (0, _recompose.withState)("xml", "setXml", ""), (0, _recompose.withHandlers)({
	createPublication: _publications.createPublication,
	createNews: _news.createNews,
	onChangeXml: function onChangeXml(_ref) {
		var setXml = _ref.setXml;
		return function (e) {
			return setXml(e.target.value);
		};
	}
}), (0, _recompose.withHandlers)({
	onSubmitPublicationsXml: _publications.onSubmitPublicationsXml,
	onSubmitNewsXml: _news.onSubmitNewsXml
}), (0, _recompose.lifecycle)({
	componentDidMount: function componentDidMount() {
		var _this = this;

		this.client = (0, _contentfulManagement.createClient)({
			accessToken: this.props.match.params.accessToken
		});
		this.client.getSpace(this.props.match.params.spaceId).then(function (space) {
			_this.props.setSpace(space);
		});
	}
}));

var Import = function Import(props) {
	return _react2.default.createElement(
		_toolbox.Container,
		null,
		_react2.default.createElement(
			_toolbox.GridCell,
			null,
			_react2.default.createElement(Input, { onChange: props.onChangeXml }),
			_react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"button",
					{ onClick: props.onSubmitPublicationsXml },
					"Import Publications"
				),
				_react2.default.createElement(
					"button",
					{ onClick: props.onSubmitNewsXml },
					"Import News"
				)
			)
		)
	);
};

Import.displayName = "Import";
var EnhancedImport = enhance(Import);

exports.default = function () {
	return _react2.default.createElement(_reactRouterDom.Route, { path: "/import/:spaceId/:accessToken", component: EnhancedImport });
};