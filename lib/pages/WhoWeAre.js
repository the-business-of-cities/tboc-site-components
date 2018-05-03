"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-direction: column;\n\t"], ["\n\t\tflex-direction: column;\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\tmargin-bottom: 1em;\n\t\tmargin-right: 0;\n\t"], ["\n\t\tmargin-bottom: 1em;\n\t\tmargin-right: 0;\n\t"]);

var _toolbox = require("src/components/common/toolbox");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _data = require("src/data");

var _data2 = _interopRequireDefault(_data);

var _Generic = require("./Generic");

var _Generic2 = _interopRequireDefault(_Generic);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Wrapper = _styledComponents2.default.div.withConfig({
	displayName: "WhoWeAre__Wrapper"
})(["display:flex;flex-direction:row;margin:4em 0;", ";"], mixins.xs(_templateObject));

var Name = _styledComponents2.default.h3.withConfig({
	displayName: "WhoWeAre__Name"
})(["display:block;margin-top:0;"]);

var Role = _styledComponents2.default.p.withConfig({
	displayName: "WhoWeAre__Role"
})(["font-weight:bold;"]);

var Links = _styledComponents2.default.p.withConfig({
	displayName: "WhoWeAre__Links"
})(["font-size:1.2em;a{margin-right:0.5em;}"]);

var Description = _styledComponents2.default.div.withConfig({
	displayName: "WhoWeAre__Description"
})([""]);

var ImageWrapper = _styledComponents2.default.div.withConfig({
	displayName: "WhoWeAre__ImageWrapper"
})(["width:10em;margin-right:2em;flex-shrink:0;", ";"], mixins.xs(_templateObject2));

var Image = _styledComponents2.default.div.withConfig({
	displayName: "WhoWeAre__Image"
})(["", " padding-top:100%;"], mixins.bgImage);

// --------------------------------------------------

var TeamMember = function TeamMember(_ref) {
	var name = _ref.name,
	    role = _ref.role,
	    descriptionHtml = _ref.descriptionHtml,
	    image = _ref.image,
	    website = _ref.website,
	    email = _ref.email,
	    linkedin = _ref.linkedin,
	    twitter = _ref.twitter,
	    rest = (0, _objectWithoutProperties3.default)(_ref, ["name", "role", "descriptionHtml", "image", "website", "email", "linkedin", "twitter"]);
	return React.createElement(
		Wrapper,
		null,
		React.createElement(
			ImageWrapper,
			null,
			React.createElement(Image, { src: image && image.url })
		),
		React.createElement(
			"div",
			null,
			React.createElement(
				Name,
				null,
				name
			),
			React.createElement(
				Role,
				null,
				role
			),
			email || linkedin || website || twitter || true ? React.createElement(
				Links,
				null,
				(email || true) && React.createElement(
					"a",
					{ href: email },
					React.createElement(_toolbox.Icon, { type: "envelope-o" })
				),
				(linkedin || true) && React.createElement(
					"a",
					{ href: twitter },
					React.createElement(_toolbox.Icon, { type: "linkedin" })
				),
				website && React.createElement(
					"a",
					{ href: website },
					React.createElement(_toolbox.Icon, { type: "link" })
				),
				twitter && React.createElement(
					"a",
					{ href: twitter },
					React.createElement(_toolbox.Icon, { type: "twitter" })
				)
			) : null,
			React.createElement(Description, {
				dangerouslySetInnerHTML: {
					__html: descriptionHtml
				}
			})
		)
	);
};

TeamMember.displayName = "TeamMember";
// --------------------------------------------------

var Comp = function Comp(props) {
	return React.createElement(
		_Generic2.default,
		props,
		_data2.default.teamMembers.map(function (o) {
			return React.createElement(TeamMember, (0, _extends3.default)({}, o, { key: o.name }));
		})
	);
};

Comp.displayName = "Comp";
exports.default = Comp;