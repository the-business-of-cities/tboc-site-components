import { Container, TileWrapper, Boxes, } from "../../components/toolbox";
import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";

import React from "react";
import Slider from "../../components/Slider";
import styled from "styled-components";
import SubscribeBanner from "../../components/SubscribeBanner";

// --------------------------------------------------

const OneTwoWrapper = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	max-width: 48em;

	> div {
		&:first-child {
			flex-basis: 100%;
			${ mixins.xs`flex-basis: 100%` };

			p {
				font-size: 1.5em;
				text-align: center;
				font-family: ${ vars.font.heading };
				font-weight: bold;
				margin-bottom: 0;
				${ mixins.xs`
					font-size: 1.25em;
					text-align: left;
				` };
			}
		}

		&:nth-child(2) {
			flex-basis: 100%;
			margin: 0 auto;
			${ mixins.xs`flex-basis: 100%` };

			p {
				margin-top: 0.5em;
				text-align: justify;

				${ mixins.xs`text-align: left;` };
			}
		}
	}
`;

const HomePageWrapper = styled.div`
	position: relative;
	overflow: hidden;
`;

// --------------------------------------------------

export const Home = ({ html, intro, slideContents, }) => (
	<HomePageWrapper>
		{slideContents && <Slider />}

		<OneTwoWrapper>
			<TileWrapper>
				<h2>{intro}</h2>
			</TileWrapper>

			<TileWrapper dangerouslySetInnerHTML = { { __html: html, } } />
		</OneTwoWrapper>

		<Container>
			<Boxes />
		</Container>

		<SubscribeBanner />
	</HomePageWrapper>
);
