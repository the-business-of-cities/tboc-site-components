import GenericGrid from "../GenericGrid";
import PropTypes from "prop-types";
import React from "react";

// --------------------------------------------------

const Publications = ( { publications, } ) => <GenericGrid entries = { publications } slug = "publications"/>;

Publications.propTypes = {
	publications: PropTypes.array.isRequired,
};

export default Publications;
