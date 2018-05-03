"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LogoGrid = undefined;

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var logosPerRow = {
	xs: 3,
	sm: 4,
	md: 5,
	lg: 5
};

var gridColumns = R.map(function (n) {
	return "repeat(" + n + ", 1fr)";
})(logosPerRow);

var LogoGridWrapper = _styledComponents2.default.div.withConfig({
	displayName: "LogoGrid__LogoGridWrapper"
})(["display:grid;", " grid-gap:2em;margin-bottom:2em;"], mixins.bpEach("grid-template-columns", gridColumns));

var LogoWrapper = _styledComponents2.default.a.withConfig({
	displayName: "LogoGrid__LogoWrapper"
})(["display:block;width:100%;"]);

var LogoInner = _styledComponents2.default.div.withConfig({
	displayName: "LogoGrid__LogoInner"
})(["width:100%;padding-top:88%;position:relative;"]);

var LogoImage = _styledComponents2.default.div.withConfig({
	displayName: "LogoGrid__LogoImage"
})(["", " background-image:url(", ");background-size:contain;background-repeat:no-repeat;background-position:center center;"], mixins.contained(), R.prop("src"));

var LogoGrid = exports.LogoGrid = function LogoGrid(_ref) {
	var logos = _ref.logos;
	return React.createElement(
		LogoGridWrapper,
		null,
		(console.log(logos), (logos || []).map(function (_ref2, i) {
			var image = _ref2.image,
			    link = _ref2.link;
			return React.createElement(
				LogoWrapper,
				{ key: i, href: link },
				React.createElement(
					LogoInner,
					null,
					React.createElement(LogoImage, {
						src: "http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:" + (image && image.url || image.fields.file.url)
					})
				)
			);
		}))
	);
};
LogoGrid.displayName = "LogoGrid";