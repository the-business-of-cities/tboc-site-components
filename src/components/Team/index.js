import * as mixins from "codogo-utility-functions";
import { Icon, } from "../toolbox";

import styled from "styled-components";
import PropTypes from "prop-types";
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
	descriptionHtml,
	email,
	image,
	linkedin,
	name,
	role,
	twitter,
	website,
	...rest
}) => (
	<Wrapper>
		<ImageWrapper>
			<Image src = { image && image.url } />
		</ImageWrapper>
		
		<div>
			<Name>{name}</Name>

			<Role>{role}</Role>

			{ 
				(email || linkedin || website || twitter ) &&
				(
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
				)
			}

			<Description
				dangerouslySetInnerHTML = { {
					__html: descriptionHtml,
				} }
			/>
		</div>
	</Wrapper>
);

TeamMember.propTypes = {
	descriptionHtml: PropTypes.any,
	email: PropTypes.any,
	image: PropTypes.any,
	linkedin: PropTypes.any,
	name: PropTypes.any,
	role: PropTypes.any,
	twitter: PropTypes.any,
	website: PropTypes.any,
};

export { TeamMember, };