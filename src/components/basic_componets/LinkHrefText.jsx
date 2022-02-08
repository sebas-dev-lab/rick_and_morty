import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

/**
 * Component show text Links
 *
 * @component
 * @example
 * const to = '/'
 * const classLink = 'link'
 * const classLi = 'topList-item'
 * const text = 'textLink'
 *
 * return (
 *  <LinkHrefText to={to} classLink={classLink} classLi={classLi} text={text} />
 * )
 *
 */
const LinkHrefText = ({ to, classLink, classLi, text }) => (
  <a href={to} className={classLink}>
    <li className={classLi}>{text}</li>
  </a>
);

LinkHrefText.propTypes = {
  to: PropTypes.string,
  classLink: PropTypes.string,
  classLi: PropTypes.string,
  text: PropTypes.string,
};

export default LinkHrefText;
