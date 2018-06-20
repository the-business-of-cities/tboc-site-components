import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

import { theme, } from "../../styles";


const Head = ( { site, page, } ) => (
	<Helmet>
		<meta charSet = "utf-8" />

		{ console.log(site, page) }

		<meta http-equiv = "X-UA-Compatible" content = "IE=edge" />

		<meta name = "viewport" content = "width=device-width, initial-scale=1" />

		<link
			rel = "canonical"
			href = { `${ site.url }/${
				page.slug ? page.slug : ""
			}` }
		/>

		<title>
			{page && page.title
				? `${ page.title } | ${ site.siteTitle }`
				: `${ site.siteTitle } | ${ site.siteDescription }`}
		</title>

		<meta
			name = "description"
			content = {
				page && page.description
					? page.description
					: site.siteDescription
			}
		/>

		<meta
			property = "og:url"
			content = { `http://www.thebusinessofcities.com/${
				page && page.slug ? page.slug : ""
			}` }
		/>

		<meta property = "og:type" content = "website" />

		<meta
			property = "og:title"
			content = {
				page && page.title
					? `${ page.title } | ${ site.siteTitle }`
					: `${ site.siteTitle } | ${ site.siteDescription }`
			}
		/>

		<meta property = "og:site_name" content = { site.sitetitle } />

		<meta
			property = "og:description"
			content = {
				page && page.description
					? page.description
					: site.siteDescription
			}
		/>

		{/*Social */}
		{/*General image*/}
		<link
			rel = "image_src"
			type = "image/jpeg"
			href = {
				page && page.image
					? page.image.url
					: site.homeImage.url
			}
		/>

		{/*180x110 Image for Linkedin */}
		<meta
			property = "og:image"
			content = {
				page && page.image
					? page.image.url
					: site.homeImage.url
			}
		/>

		<meta property = "og:image:width" content = "180" />

		<meta property = "og:image:height" content = "110" />

		{/*600x315 Image for Facebook */}
		<meta
			property = "og:image"
			content = {
				page && page.image
					? page.image.url
					: site.homeImage.url
			}
		/>

		<meta property = "og:image:width" content = "600" />

		<meta property = "og:image:height" content = "315" />

		{/*Twitter Card */}

		{/*<meta name = "twitter:card" content = "summary">*/}
		<meta name = "twitter:card" content = "summary_large_image" />

		<meta name = "twitter:site" content = { theme.meta.twitterUsername } />

		<meta name = "twitter:creator" content = { theme.meta.twitterCreator } />

		{page && page.title
			? `<meta name = "twitter:title" content = ${ page.title } />
			`
			: `<meta name = "twitter:title" content = ${ site.siteTitle } />
			`}

		<meta
			name = "twitter:url"
			content = { `http://www.thebusinessofcities.com/${
				page && page.slug ? page.slug : ""
			}` }
		/>

		<meta
			name = "twitter:description"
			content = {
				page && page.description
					? page.description
					: site.siteDescription
			}
		/>

		<meta
			name = "twitter:image:src"
			content = {
				page && page.image
					? page.image.url
					: site.homeImage.url
			}
		/>

		{/*Analytics */}
		{/*Search Console */}
		<meta
			name = "google-site-verification"
			content = { theme.meta.googleSearch }
		/>

		{/*Google analytics*/}

		{/* Cookie Warning*/}
	</Helmet>
);

Head.propTypes = {
	page: PropTypes.object,
	site: PropTypes.object,
};

export default Head;
