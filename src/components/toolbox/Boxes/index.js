import * as mixins from "codogo-utility-functions";


import styled from "styled-components";
import R from "ramda";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

import { theme, } from "../../../styles";

const Wrapper = styled.div`
	${ mixins.bp.sm.min`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1em;
	` } color: white;
`;

const BoxWrapper = styled.a`
	background-color: ${ R.path([ "theme", "nav", ]) };
	display: block;
	${ mixins.xs`
		margin-bottom: 1em;
	` };
`;

const paddingTop = "66.7%";

const Image = styled.div`
	${ mixins.bgImage }

	${ mixins.bp.sm.min`
		padding-top: ${ paddingTop };
	` }
	${ mixins.xs`
		padding-top: 50%;
	` }
`;

const TextWrapper = styled.div`
	${ mixins.bp.sm.min`
		padding-top: ${ paddingTop };
		position: relative;
	` };
`;

const TextInner = styled.div`
	${ mixins.bp.sm.min`
		${ mixins.contained() }
	` } padding: 1em;
`;

const Title = styled.div`
	font-family: ${ props => props.theme.font.heading };
	font-weight: bold;
	font-size: 1.1em;
`;

const Text = styled.div`
	font-family: ${ props => props.theme.font.paragraph };
	font-size: 0.9em;
`;

const Box = ({ image, title, text, link, }) => (
	<BoxWrapper href = { link }>
		<Image src = { image && image.url } />
		<TextWrapper>
			<TextInner>
				<Title>{title}</Title>
				<Text>{text}</Text>
			</TextInner>
		</TextWrapper>
	</BoxWrapper>
);

const things = [
	{
		title: "Watch",
		text: "Watch things",
		image: {
			url:
				"https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
		},
		link: "#",
	},
	{
		title: "Read",
		text: "Read things",
		image: {
			url:
				"https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
		},
		link: "#",
	},
	{
		title: "Listen",
		text: "Listen to things",
		image: {
			url:
				"https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb",
		},
		link: "#",
	},
];

export const Boxes = () => (
	<Wrapper>{things.map((o, i) => <Box { ...o } key = { i } />)}</Wrapper>
);
