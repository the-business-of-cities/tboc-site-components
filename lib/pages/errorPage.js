"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.errorPage = undefined;

var _toolbox = require("src/components/common/toolbox");

// ----------------------

var errorPage = exports.errorPage = function errorPage() {
	return React.createElement(
		_toolbox.PageWrapper,
		null,
		React.createElement(
			_toolbox.Container,
			null,
			React.createElement(
				_toolbox.TextCell,
				null,
				React.createElement(
					_toolbox.PageBody,
					null,
					React.createElement(
						"h1",
						null,
						"404"
					),
					React.createElement(
						"p",
						null,
						"Whoops, this page doesn't exist."
					)
				)
			)
		)
	);
};
errorPage.displayName = "errorPage";