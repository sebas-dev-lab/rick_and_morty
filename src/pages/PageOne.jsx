import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacterList } from "../Redux/Actions/character.actions";
// Templates
import CardsSection from "../templates/CardsSection";
import NavBarTypeOne from "../templates/NavBarTypeOne";
import Footer from "../templates/Footer";
import Search from "../templates/Search";

const pageOne = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList({ resource: "character", id: "", page: "" }));
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

export default pageOne;
