import { Icon, } from "../toolbox";
import * as mixins from "codogo-utility-functions";

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import slugify from "slugify";

// --------------------------------------------------

import { theme, } from "../../styles";

const FooterWrapper = styled.footer`
	background-color: ${ props => props.theme.colors.footer };
	position: absolute;
	right: 0;
	left: 0;
	bottom: 0;
	overflow: hidden;
`;

const Inner = styled.div`
	${ mixins.bpEither("height", theme.dimensions.footer.height) };
	${ mixins.bpEither("padding", theme.dimensions.nav.margin) };

	align-items: center;
	display: flex;
	justify-content: space-between;
	color: white;
	max-width: ${ props => props.theme.breakpoints.lg.min }px;
	margin: 0 auto;

	${ mixins.xs`
		flex-wrap: wrap;
		height: auto;
	` };
	${ mixins.bp.sm.min`
		padding-top: 0;
		padding-bottom: 0;
		font-size: 0.9em;
	` };
`;

const FooterSection = styled.div`
	text-align: center;

	${ mixins.xs`
		width: 100%;
		padding: 4px;
	` };
`;

const FooterLinks = styled.div`
	text-align: center;

	${ mixins.xs`
		width: 100%;
		padding: 4px;
	` };

	> a {
		margin: 0 0.5em;
	}	
`;

const Contact = styled(FooterSection)`
	order: 0;

	a {
		color: white;

		&:hover {
			color: #ddd;
			text-decoration: underline;
		}
	}
`;

const Social = styled(FooterSection)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 1.5em;
	margin: 0 -0.25em;
	order: 1;

	> a {
		&:hover {
			opacity: 0.7;
		}
	}
`;

const Footer = ( { footerText, footerLinks, socialLinks, } ) => {
	return (
		<FooterWrapper>
			<Inner>
				<Contact>{ footerText }</Contact>

				<FooterLinks>
					{
						footerLinks.map( link => <a key = { slugify(link.title, { lower: true, } ) } href = { slugify(link.title.toLowerCase()) }>{link.title}</a>)
					}
				</FooterLinks>

				<Social>
					{ 
						socialLinks &&
						socialLinks.map( link =>
							(
								<a
									key = { `footer-${ link.type }-${ link.link }` }
									href = { link.link }
									style = {
										link.type === "phone" ? 
											{
												marginRight: "0.5em",
												paddingRight: "0.75em",
												borderRight: "1px solid white",
											} :
											undefined
									}
								>
									<Icon icon = { link.type } />
								</a>
							)
						) }
				</Social>
			</Inner>
		</FooterWrapper>
	);
};

Footer.propTypes = {
	footerLinks: PropTypes.array,
	footerText: PropTypes.string,
	socialLinks: PropTypes.array,
};

export default Footer;
