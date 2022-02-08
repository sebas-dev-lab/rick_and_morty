import React from "react";
import PropTypes from "prop-types";
import InputTexts from "../basic_componets/InputTexts";

/**
 *
 *
 * @component
 * @example
 * const props = {basicSearchOptions,selectBasicFilter,handleSelectBasicFilter,setTypeFilter,handleSearch,handleSetInputValuForBasicFilter,}
 *
 * return (
 *  <BasicSearch {...props} />
 * )
 *
 */
const BasicSearch = ({
  basicSearchOptions,
  selectBasicFilter,
  handleSelectBasicFilter,
  setTypeFilter,
  handleSearch,
  handleSetInputValuForBasicFilter,
}) => {
  return (
    <>
      <div className="basic-sarch-container">
        <select
          name="Filter"
          value={selectBasicFilter.filter}
          onChange={handleSelectBasicFilter}
        >
          {basicSearchOptions.map((option, y) => (
            <option key={y} value={option.name}>
              {option.text}
            </option>
          ))}
        </select>
        <InputTexts
          className="basic-sarch-container--inputText"
          placeHolder={selectBasicFilter.filter + "..."}
          onChange={handleSetInputValuForBasicFilter}
          search={true}
          searchButtonClassName="submit-basicInptu"
          handleSearch={() => handleSearch(true)}
        />
      </div>
      {setTypeFilter()}
    </>
  );
};

BasicSearch.propTypes = {
  basicSearchOptions: PropTypes.array.isRequired,
  selectBasicFilter: PropTypes.object.isRequired,
  handleSelectBasicFilter: PropTypes.func.isRequired,
  handleSetInputValuForBasicFilter: PropTypes.func.isRequired,
  setTypeFilter: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default BasicSearch;
