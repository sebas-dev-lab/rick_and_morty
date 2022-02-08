import React from "react";
import PropTypes from "prop-types";
import Images from "../basic_componets/Images";
import SvgCardStyle from "../basic_componets/SvgCardStyle";
import TitleSmallDescription from "../basic_componets/TitleSmallDescription";

/**
 *
 *
 * @component
 * @example
 * const props = {card, y}
 *
 * return (
 *  <Card {...props} />
 * )
 *
 */
const Card = ({ card, y }) => {
  return (
    <li key={y}>
      <a href={card.url} className="card">
        <Images img={card.image} classImg="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <SvgCardStyle />
            <Images img={card.image} classImg="" alt="" />
            <div className="card__header-tet">
              <TitleSmallDescription
                type="h3"
                title={card.name}
                description={"Is " + card.species}
              />
            </div>
          </div>
          <p className="card__description">
            {"Gender " + card.gender + ". Is " + card.status}
          </p>
        </div>
      </a>
    </li>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  y: PropTypes.number,
};
export default Card;
