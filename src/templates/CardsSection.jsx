import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { setLoading } from "../Redux/Actions/local.actions";

// Components
import Card from "../components/conjugate_components/Card";
import ButtonToSearch from "../components/basic_componets/ButtonToSearch";
import Loading from "../components/basic_componets/Loading";
import {
  getCharacterList,
  getCharacterListFilter,
} from "../Redux/Actions/character.actions";

/**
 *
 *
 * @component
 * @example
 *
 * return (
 *  <CardsSection />
 * )
 *
 */

const CardsSection = () => {
  let location = useLocation();
  let dispatch = useDispatch();
  // set local state
  let [elements, setElements] = useState([]);

  // get informateion from store
  let { loading } = useSelector((store) => store.local);
  let { info, inforSearchList, list, searchList, error } = useSelector(
    (store) => store.character
  );

  /**
   * Manage list elements and loading
   */
  useEffect(() => {
    if (searchList.length > 0 || list.length > 0) {
      setElements(searchList.length > 0 ? searchList : list);
      dispatch(setLoading(false));
    }
  }, [searchList, list]);

  /**
   * Dispatch general links
   */
  useEffect(() => {
    if (error) {
      dispatch(getCharacterList({ resource: "character", id: "", page: "" }));
    }
  }, [error]);

  /**
   * Dispatch list filter or general.. concat more elements, need pass 2nd props to action functions with true.
   */
  const handleClick = () => {
    if (location.search) {
      dispatch(
        getCharacterListFilter(
          {
            resource: "character",
            id: "",
            page: inforSearchList.next,
          },
          true
        )
      );
    } else {
      dispatch(
        getCharacterList(
          { resource: "character", id: "", page: info.next },
          true
        )
      );
    }
  };

  return (
    <div className="container">
      {loading || elements.length == 0 ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <div className="card-container">
          <ul className="cards">
            {elements.length > 0
              ? elements.map((card, key) => {
                  return <Card key={key} card={card} y={key} />;
                })
              : "No results"}
          </ul>
        </div>
      )}

      <ButtonToSearch
        handleSearch={handleClick}
        text="Load more..."
        search={false}
        searchButtonClassName="charge_more_btn"
      />
    </div>
  );
};

export default CardsSection;
