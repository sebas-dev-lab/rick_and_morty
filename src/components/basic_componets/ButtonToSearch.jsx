import React from "react";
import PropTypes from "prop-types";

/**
 * @components
 * @param {*} object Text, search, searchButtonClassName, headleSearch
 * @returns
 * @example
 * const text= "string"
 * const search = boolean
 * const searchButtonClassName = 'string'
 * const headleSearch = function => ()
 *
 * return (
 *  <ButtonToSearch search={search} text={text} searchButtonClassName={searchButtonClassName} headleSearch={headleSearch} />
 * )
 *
 */
const ButtonToSearch = ({
  searchButtonClassName,
  handleSearch,
  search,
  text,
}) => {
  return (
    <button
      type="submit"
      className={searchButtonClassName}
      onClick={handleSearch}
    >
      {search ? <i className="fa fa-search"></i> : text}
    </button>
  );
};

ButtonToSearch.propTypes = {
  text: PropTypes.string,
  search: PropTypes.bool,
  searchButtonClassName: PropTypes.string,
  handleSearch: PropTypes.func,
};
export default ButtonToSearch;
