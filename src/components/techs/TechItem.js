import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return <li className="collection-item">{tech.firstName}</li>;
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default TechItem;
