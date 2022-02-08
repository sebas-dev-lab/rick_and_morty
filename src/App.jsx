import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Components
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PageOne />}></Route>
      <Route exact path="/results/filters" element={<PageTwo />}>
      </Route>
    </Routes>
  );
};

export default App;
