import React from "react";
import PropTypes from "prop-types";

const TitleSmallDescription = ({ type, title, description }) => {
  return (
    <>
      <p as={type} className="card__title">
        {title}
      </p>
      {description && <span className="card__status">{description}</span>}
    </>
  );
};

TitleSmallDescription.propTypes = {
  type: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
export default TitleSmallDescription;
