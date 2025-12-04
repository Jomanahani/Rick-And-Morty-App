import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routePaths";
import Characters from "../pages/Characters";
import CharacterDetails from "../pages/CharacterDetails";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Characters />} />
      <Route path={ROUTES.CHARACTERDETAILS} element={<CharacterDetails />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
};

export default Router;
