import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Component show text Links
 *
 * @component
 * @example
 * const src = '/'
 * const alt = 'link'
 * const classImg = 'topList-item'
 * const props = {src, alt, classImg}
 * return (
 *  <ImageSmallCircle  {...props}/>
 * )
 *
 */
const ImageSmallCircle = ({ src, alt, classImg, ...props }) => (
  <Link to={props.link ? props.link : "#"}>
    <img className={classImg} src={src} alt={alt} {...props} />
  </Link>
);

ImageSmallCircle.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classImg: PropTypes.string,
};

export default ImageSmallCircle;
