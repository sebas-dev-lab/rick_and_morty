import React from "react";
// Libraries
import PropTypes from "prop-types";
// Components
import LinkText from "../basic_componets/LinkText";
import LinkHrefText from "../basic_componets/LinkHrefText";

/**
 * 
 *
 * @component
 * @example
 * const links = [{to:"#", classLink:"", classLi="", text="text", href:false}]
 *
 * return (
 *  <SerialLinkTexts links={links} />
 * )
 *
 */
const SerialLinkTexts = ({
  links,
  basicClassLink,
  basicClassLi,
  classUl,
  href,
}) => {
  return (
    <ul className={classUl}>
      {links.map((link, y) =>
        href ? (
          <LinkHrefText
            to={link.to}
            classLink={link.classLink ? link.classLink : basicClassLink}
            classLi={link.classLi ? link.classLi : basicClassLi}
            text={link.text}
            key={y}
          />
        ) : (
          <LinkText
            to={link.to}
            classLink={link.classLink ? link.classLink : basicClassLink}
            classLi={link.classLi ? link.classLi : basicClassLi}
            text={link.text}
            key={y}
          />
        )
      )}
    </ul>
  );
};

SerialLinkTexts.propTypes = {
  links: PropTypes.array.isRequired,
  basicClassLink: PropTypes.string,
  basicClassLi: PropTypes.string,
  classUl: PropTypes.string,
  href: PropTypes.bool.isRequired,
};
export default SerialLinkTexts;
