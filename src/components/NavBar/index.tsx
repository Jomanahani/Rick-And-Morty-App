import React from "react";
import { Name, Nav } from "./style";
import SearchBar from "../SearchBar";

type NavBarProps = {
  name: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  resultsCount?: number;
};

const NavBar = ({ name, searchTerm, setSearchTerm, resultsCount }: NavBarProps) => {
  return (
    <Nav>
      <Name>{name}</Name>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {typeof resultsCount === "number" && <p>Found {resultsCount} results</p>}
    </Nav>
  );
};

export default NavBar;
