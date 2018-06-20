"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ErrorPage = undefined;

var _toolbox = require("../components/toolbox");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

var ErrorPage = exports.ErrorPage = function ErrorPage() {
	return _react2.default.createElement(
		_toolbox.PageWrapper,
		null,
		_react2.default.createElement(
			_toolbox.Container,
			null,
			_react2.default.createElement(
				_toolbox.TextCell,
				null,
				_react2.default.createElement(
					_toolbox.PageBody,
					null,
					_react2.default.createElement(
						"h1",
						null,
						"404"
					),
					_react2.default.createElement(
						"p",
						null,
						"Whoops, this page doesn't exist."
					)
				)
			)
		)
	);
};
ErrorPage.displayName = "ErrorPage";