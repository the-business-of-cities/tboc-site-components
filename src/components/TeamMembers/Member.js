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

const Links = styled.div`
	font-size: 1.2em;

	a {
		margin-right: 0.25em;
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
		linkedIn,
		name,
		role,
		twitter,
		website,
	} = member;

	return member && (
		<TeamMemberWrapper>
			<PrimaryDetails>
				{ image && <MemberImage src = { `http://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_600,h_800,c_fill,g_face,f_auto/https:${ image.file.url }` } /> }
			
				<div>
					{ name && <Name>{ name }</Name> }

					{ role && <Role>{ role }</Role> }

					{
						(email || linkedIn || website || twitter ) &&
						(
							<Links>
								{ email && (
									<a href = { `mailto:${ email }` }>
										<Icon icon = "envelope" />
									</a>
								)}

								{ linkedIn && (
									<a href = { `${ linkedIn }` }>
										<Icon icon = "linkedin" />
									</a>
								)}

								{ website && (
									<a href = { website }>
										<Icon icon = "link" />
									</a>
								)}

								{ twitter && (
									<a href = { `https://www.twitter.com/${ twitter }` }>
										<Icon icon = "twitter" />
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
