import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 70%;
  background-color: #8f750eb1;
  border: none;
  outline: none;
  border-radius: 1rem;
  padding: 1rem;
  color: #1c1c1c;
  &::placeholder {
    color: #181201ca;
  }
`;

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <Input
      placeholder="Search for character..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
