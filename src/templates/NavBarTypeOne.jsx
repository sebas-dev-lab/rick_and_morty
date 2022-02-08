// ================= Imports =================== //
import React from "react";
// Libraries
import PropTypes from "prop-types";
// Components
import ImageSmallCircle from "../components/basic_componets/ImageSmallCircle";
import SerialLinkTexts from "../components/conjugate_components/SerialLinkTexts";
// Mocks
import navBarMock from "../mocks/navBarMock";

/**
 * Component show test
 *
 * @component
 * @example
 * return (
 *  <NavBarTypeOne {...navBarMock} />
 * )
 *
 */

const NavBarTypeOne = ({ leftProps, centerProps, rightProps }) => {
  return (
    <div className="navbar">
      {/* Left */}
      <div className="navbar--topright">
        <ImageSmallCircle {...rightProps} />
      </div>
      {/* Center */}
      <div className="navbar--topcenter">
        <SerialLinkTexts {...centerProps} />
      </div>
      {/* Rigth */}
      <div className="topIcon navbar--topleft">
        <SerialLinkTexts {...leftProps} />
      </div>
    </div>
  );
};

NavBarTypeOne.propTypes = {
  leftProps: PropTypes.object.isRequired,
  centerProps: PropTypes.object.isRequired,
  rightProps: PropTypes.object.isRequired,
};

NavBarTypeOne.defaultProps = navBarMock;

export default NavBarTypeOne;
