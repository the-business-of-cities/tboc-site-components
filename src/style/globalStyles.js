import { injectGlobal, css, } from "styled-components";

import * as vars from "./vars";
import * as mixins from "codogo-utility-functions";
import { objMap, } from "./lib/util";

import React from "react";

// --------------------------------------------------

const textMargins = objMap(vars.font.size, (key, val) => val + " 0");

const defaultGlobalStyles = css`
	*, *:before, *:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		min-height: 100%;
		position: relative;
	}

	body {
		background-color: ${ vars.colors.bg };
		font-family: ${ vars.font.family };
		${ mixins.bpEach("font-size", vars.font.size) }
		color: ${ vars.colors.text };
		margin: 0;
		${ mixins.bpEither("margin-bottom", vars.dim.footer.height) }
		line-height: 1.5;
		text-rendering: optimizeLegibility;
	}

	a,
	a:hover,
	a:visited,
	a:active {
		text-decoration: none;
		color: currentColor;
	}

	p, h1, h2, h3, h4 {
		${ mixins.bpEach("margin", textMargins) }
	}

	img {
		vertical-align: bottom;
	}

	@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Lora:400,700|Montserrat:400,600');

	p, ul, ol {
		font-family: "Lora", serif;
		font-size: 1.0em;
	}

	p {
		a,
		a:hover,
		a:visited,
		a:active {
			text-decoration: underline;
			font-weight: bold;
		}

		a:hover,
		a:active {
			opacity: 0.7;
		}

		img {
			max-width: 100%;
		}
	}

	ul, ol, li {
		${ mixins.bpEach("margin", textMargins) };
	}

	ul, ol, li {
		margin-left: 1.5em;
	}

	h1,
	h2,
	h3 {
		display: inline-block;

		:after {
			padding: 0.1em 0;
			content: '';
			display: block;
			width: 5em;
			border-bottom: 0.4em solid ${ vars.colors.bgdark };
		}
	}

	hr {
		border: 0;
		border-top: 0.4em solid ${ vars.colors.bgdark };
		margin: 2em 0;
	}
`;

// --------------------------------------------------

export default () => injectGlobal`
	${ defaultGlobalStyles }
`;
