import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacterListFilter } from "../Redux/Actions/character.actions";
import { useLocation } from "react-router-dom";
// Templates
import CardsSection from "../templates/CardsSection";
import NavBarTypeOne from "../templates/NavBarTypeOne";
import Search from "../templates/Search";
import Footer from "../templates/Footer";

const PageTwo = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCharacterListFilter({
        resource: "character",
        id: "",
        page: "",
        filters: location.search,
      })
    );
  }, [location.search]);

  return (
    <>
      {/* Navbar src/templates/ */}
      <NavBarTypeOne />
      <Search />
      <CardsSection />
      <Footer/>

    </>
  );
};

export default PageTwo;
