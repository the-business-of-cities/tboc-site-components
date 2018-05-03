import { Container, TileWrapper, Boxes, } from "src/components/common/toolbox";

import * as mixins from "codogo-utility-functions";
import * as vars from "src/components/style/vars";

import Data from "src/data";
import Head from "src/components/common/Head";
import Slider from "./Slider";
import styled from "styled-components";
import SubscribeBanner from "./SubscribeBanner";

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

const Home = () => (
	<HomePageWrapper>
		<Head />

		<Slider />

		<OneTwoWrapper>
			<TileWrapper>
				<h2>
					We advise decision-makers on their urban strategies.<br />
					We make sense of global complexity.<br />
					We benchmark cities on the metrics that matter.<br />
					We write leading edge reports.<br />
					We chair and speak at global events.
				</h2>
			</TileWrapper>

			<TileWrapper dangerouslySetInnerHTML = { { __html: Data.homeHtml, } } />
		</OneTwoWrapper>

		<Container>
			<Boxes />
		</Container>

		<SubscribeBanner />
	</HomePageWrapper>
);

export default Home;
