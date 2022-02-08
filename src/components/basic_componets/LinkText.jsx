import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
 *  <LinkText to={to} classLink={classLink} classLi={classLi} text={text} />
 * )
 *
 */
const LinkText = ({ to, classLink, classLi, text }) => (
  <Link to={to} className={classLink}>
    <li className={classLi}>{text}</li>
  </Link>
);

LinkText.propTypes = {
  to: PropTypes.string,
  classLink: PropTypes.string,
  classLi: PropTypes.string,
  text: PropTypes.string,
};

export default LinkText;
