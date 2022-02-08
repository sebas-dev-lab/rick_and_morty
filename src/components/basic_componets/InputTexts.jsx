import React from "react";
import PropTypes from "prop-types";

/**
 *
 *
 * @component
 * @example
 * const obj = {   name,className,placeHolder,onChange,search,searchButtonClassName,handleSearch,}
 *
 * return (
 *  <InputTexts {...obj} />
 * )
 *
 */

const InputTexts = ({
  name,
  className,
  placeHolder,
  onChange,
  search,
  searchButtonClassName,
  handleSearch,
}) => {
  return (
    <>
      <input
        type="text"
        className={className}
        placeholder={placeHolder}
        onChange={onChange}
        name={name}
      />
      {search && (
        <button
          type="submit"
          className={searchButtonClassName}
          onClick={handleSearch}
        >
          <i className="fa fa-search"></i>
        </button>
      )}
    </>
  );
};

InputTexts.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  search: PropTypes.bool,
  searchButtonClassName: PropTypes.string,
  handleSearch: PropTypes.func,
};

export default InputTexts;
