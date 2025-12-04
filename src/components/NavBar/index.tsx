import React from "react";
import { Name, Nav, Results } from "./style";
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
      <Results>Found {resultsCount} results</Results>
    </Nav>
  );
};

export default NavBar;
