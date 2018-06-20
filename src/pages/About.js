import { Icon, } from "../components/toolbox";

import styled from "styled-components";
import * as mixins from "codogo-utility-functions";
import Generic from "./Generic";

import React from "react";

// --------------------------------------------------

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 4em 0;

	${ mixins.xs`
		flex-direction: column;
	` };
`;

const Name = styled.h3`
	display: block;
	margin-top: 0;
`;

const Role = styled.p`
	font-weight: bold;
`;

const Links = styled.p`
	font-size: 1.2em;
	a {
		margin-right: 0.5em;
	}
`;

const Description = styled.div``;

const ImageWrapper = styled.div`
	width: 10em;
	margin-right: 2em;
	flex-shrink: 0;

	${ mixins.xs`
		margin-bottom: 1em;
		margin-right: 0;
	` };
`;

const Image = styled.div`
	${ mixins.bgImage } padding-top: 100%;
`;

// --------------------------------------------------

const TeamMember = ({
	name,
	role,
	descriptionHtml,
	image,
	website,
	email,
	linkedin,
	twitter,
	...rest
}) => (
	<Wrapper>
		<ImageWrapper>
			<Image src = { image && image.url } />
		</ImageWrapper>
		<div>
			<Name>{name}</Name>
			<Role>{role}</Role>
			{email || linkedin || website || twitter || true ? (
				<Links>
					{(email || true) && (
						<a href = { email }>
							<Icon type = "envelope-o" />
						</a>
					)}
					{(linkedin || true) && (
						<a href = { twitter }>
							<Icon type = "linkedin" />
						</a>
					)}
					{website && (
						<a href = { website }>
							<Icon type = "link" />
						</a>
					)}
					{twitter && (
						<a href = { twitter }>
							<Icon type = "twitter" />
						</a>
					)}
				</Links>
			) : null}

			<Description
				dangerouslySetInnerHTML = { {
					__html: descriptionHtml,
				} }
			/>
		</div>
	</Wrapper>
);

// --------------------------------------------------

export const About = props => (
	<Generic { ...props }>
		{props.data.teamMembers.map(o => <TeamMember { ...o } key = { o.name } />)}
	</Generic>
);
