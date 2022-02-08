import React from "react";
import PropTypes from "prop-types";
import footerMock from "../mocks/footerMocks";
import LinkHrefText from "../components/basic_componets/LinkHrefText";

const Footer = ({ centerProps }) => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Test - React</h3>
        <p>Rick and Morty API</p>
      </div>
      <div className="footer-bottom">
        <p>
          <a href="#">Sebastian Lescano</a>
        </p>
        <div className="footer-menu">
          <div className="f-menu">
            <LinkHrefText {...centerProps} />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  centerProps: PropTypes.object.isRequired,
};
Footer.defaultProps = footerMock;

export default Footer;
