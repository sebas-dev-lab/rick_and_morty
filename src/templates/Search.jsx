import React, { useState } from "react";
import searchMock from "../mocks/searchMocks";
import Basics from "../helpers/Basics";
import { useNavigate } from "react-router-dom";
import BasicSearch from "../components/conjugate_components/BasicSearch";
import AdvacnceSearch from "../components/conjugate_components/AdvacnceSearch";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/Actions/local.actions";

/**
 * @component
 * @returns
 *
 */
const Search = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.local);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // ============ Filters Inital States ================ //
  const [selectBasicFilter, setSelectBasicFilter] = useState(
    Basics.searchInitialStates("basic")
  );
  const [advanceFilters, setAdvanceFilters] = useState(
    Basics.searchInitialStates("advance")
  );

  const handleOpen = () => {
    /**
     * Change between basic or advance filters. Set initial states when have changes.
     */
    setSelectBasicFilter(Basics.searchInitialStates("basic"));
    setAdvanceFilters(Basics.searchInitialStates("advance"));
    setOpen(!open);
  };

  //   ================== Basic filters functions =================== //
  const handleSelectBasicFilter = (e) => {
    /**
     * Set value for type basic filter
     * @param {*} e
     *
     */
    setSelectBasicFilter({ ...selectBasicFilter, filter: e.target.value });
  };

  //   ======================== ========= ======================== //
  const handleSetInputValuForBasicFilter = (e) => {
    /**
     * Set values for advance filters
     * @param {*} e
     */
    setSelectBasicFilter({ ...selectBasicFilter, input: e.target.value });
  };

  //   ================== Advance filters functions =================== //

  const handleSetInputValueForAdvanceFilter = (e, type) => {
    if (type) {
      let reset = Object.assign({}, advanceFilters[type]);
      for (let i in advanceFilters[type]) {
        if (e.target.name == i) {
          reset[i] = !reset[i];
        } else {
          reset[i] = false;
        }
      }
      setAdvanceFilters({ ...advanceFilters, [type]: reset });
    } else {
      setAdvanceFilters({
        ...advanceFilters,
        [e.target.name]: e.target.value,
      });
    }
  };

  //   ================== Set query and reditect =================== //

  const handleSearch = (basic) => {
    let query = "";
    let status = true;
    if (basic) {
      if (selectBasicFilter.input) {
        dispatch(setLoading(true));
        query = Basics.setQueryFilterToSearch(selectBasicFilter, false);
      } else {
        status = false;
      }
    } else {
      dispatch(setLoading(true));
      query = Basics.setQueryFilterToSearch(advanceFilters, true);
    }
    navigate(query, { replace: true });
  };

  //   ======================== ========= ======================== //

  let setTypeFilter = () => {
    /**
     * Switch basic to advance component changes.
     * @returns local component
     */
    return (
      <span
        className={!open ? "search-advance-btn" : "search-advance-btn_to_basic"}
      >
        <p onClick={handleOpen}>{!open ? "Advance search" : "Basic search"}</p>
      </span>
    );
  };

  //   ======================== ========= ======================== //

  return (
    <div className="box-search">
      <div className="search-container-1">
        {!open && (
          <BasicSearch
            basicSearchOptions={searchMock.basicSearchOptions}
            selectBasicFilter={selectBasicFilter}
            handleSelectBasicFilter={handleSelectBasicFilter}
            setTypeFilter={setTypeFilter}
            handleSearch={handleSearch}
            handleSetInputValuForBasicFilter={handleSetInputValuForBasicFilter}
          />
        )}
      </div>

      {open && (
        <AdvacnceSearch
          handleSearch={handleSearch}
          advanceSearchOptions={searchMock.advanceSearchOptions}
          setTypeFilter={setTypeFilter}
          advanceFilters={advanceFilters}
          handleSetInputValueForAdvanceFilter={
            handleSetInputValueForAdvanceFilter
          }
          inputTexts={searchMock.inputTexts}
        />
      )}
    </div>
  );
};

export default Search;
