import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ButtonToSearch from "../basic_componets/ButtonToSearch";
import InputRadio from "../basic_componets/InputRadio";
import InputTexts from "../basic_componets/InputTexts";
import useWindowSize from "../../hooks/useScreenSize";

/**
 *
 *
 * @component
 * @example
 * const props = {  handleSearch,advanceSearchOptions,setTypeFilter,advanceFilters,handleSetInputValueForAdvanceFilter,}
 *
 * return (
 *  <AdvacnceSearch {...props} />
 * )
 *
 */
const AdvacnceSearch = ({
  handleSearch,
  advanceSearchOptions,
  setTypeFilter,
  advanceFilters,
  handleSetInputValueForAdvanceFilter,
  inputTexts,
}) => {
  let size = useWindowSize();

  return (
    <div className="search-advance-menu">
      <div className="advance-btn-togle">
        {setTypeFilter()}
        <ButtonToSearch
          searchButtonClassName="submit-basicInptu"
          search={size.width < 620 ? false : true}
          text={size.width < 620 ? "Search..." : ""}
          handleSearch={() => handleSearch(false)}
        />
      </div>
      <div className="search-filter-status">
        <label className="input-gender">Status</label>
        {advanceSearchOptions.status.map((item, y) => (
          <InputRadio
            key={y}
            labelClassName="input-radio"
            checked={advanceFilters.status[item.name]}
            value={item.name}
            name={item.name}
            onChange={(e) => handleSetInputValueForAdvanceFilter(e, "status")}
            text={item.text}
          />
        ))}
      </div>
      <div className="search-filter-gender">
        <label className="input-gender">Gender</label>
        {advanceSearchOptions.gender.map((item, y) => (
          <InputRadio
            key={y}
            text={item.text}
            labelClassName="input-radio"
            checked={advanceFilters.gender[item.name]}
            value="first_checkbox"
            name={item.name}
            onChange={(e) => handleSetInputValueForAdvanceFilter(e, "gender")}
          />
        ))}
      </div>
      <div className="search-filter-text">
        {inputTexts.map((item, y) => (
          <InputTexts
            key={y}
            className=""
            placeHolder={item.text + "..."}
            name={item.name}
            onChange={(e) => handleSetInputValueForAdvanceFilter(e)}
          />
        ))}
      </div>
    </div>
  );
};

AdvacnceSearch.propTypes = {
  inputTexts: PropTypes.array.isRequired,
  selectBasicFilter: PropTypes.object.isRequired,
  handleSetInputValueForAdvanceFilter: PropTypes.func.isRequired,
  advanceSearchOptions: PropTypes.array.isRequired,
  setTypeFilter: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default AdvacnceSearch;
