import React from "react";
import PropTypes from "prop-types";

/**
 * @component
 * @param {*} param0 
 * @returns 
 * 
 * @example
 * const img = 'string'
 * const classImg = 'string'
 * const alt = 'string'
 *
 * return (
 *  <Images img={img} classImg={classImg}alt={alt} />
 * )
 * 
 */

const Images = ({ img, classImg, alt }) => {
  return (
    <img src={img} className={classImg ? classImg : "card__thumb"} alt={alt} />
  );
};

Images.propTypes = {
  img: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
export default Images;
