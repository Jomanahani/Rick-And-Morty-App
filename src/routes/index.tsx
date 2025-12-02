import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routePaths";
import Characters from "../pages/Characters";
import CharacterDetails from "../pages/CharacterDetails";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Characters />} />
      <Route path={ROUTES.CHARACTERDETAILS} element={<CharacterDetails />} />
      {/* <Route path={ROUTES.REDIRECT} element={<RedirectAfterLogin />} /> */}
    </Routes>
  );
};

export default Router;
