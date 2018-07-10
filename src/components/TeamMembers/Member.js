import * as mixins from "codogo-utility-functions";
import { Icon, Image, } from "../toolbox";

import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const TeamMemberWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

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

const PrimaryDetails = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding-bottom: 0.5em;
	grid-column-gap: 1em;
  	grid-row-gap: 1em;

	> div {
		flex-basis: 50%;
		display: flex;
		flex: 1;
		flex-direction: column;
	}
`;

const MemberImage = styled(Image)`
	max-width: 250px;
	max-height: 250px;
	flex-basis: 50%;
	display: flex;
	flex: 1;
	object-position: top left;
`;

// --------------------------------------------------

const TeamMember = ( { member, }) => {
	const {
		description,
		email,
		image,
		linkedin,
		name,
		role,
		twitter,
		website,
	} = member;

	return (
		<TeamMemberWrapper>
			<PrimaryDetails>
				<MemberImage src = { image && image.file.url } />
			
				<div>
					<Name>{ name }</Name>

					<Role>{ role }</Role>

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
				</div>
			</PrimaryDetails>

			{
				description &&
				<Description
					dangerouslySetInnerHTML = { {
						__html: description.description,
					} }
				/>
			}
		</TeamMemberWrapper>
	);
};

TeamMember.propTypes = {
	member: PropTypes.shape({
		description: PropTypes.any,
		email: PropTypes.any,
		image: PropTypes.any,
		linkedin: PropTypes.any,
		name: PropTypes.any,
		role: PropTypes.any,
		twitter: PropTypes.any,
		website: PropTypes.any,
	}).isRequired,
};

export default TeamMember;
