import React from 'react'
import { Name, Nav } from './style'
import SearchBar from '../SearchBar';


type NavBarProps = {
  name: string;
};


const NavBar = ({name}:NavBarProps) => {
  return (
    <Nav>
      <Name>{name}</Name>
      <SearchBar />
      <p>Found x results</p>
    </Nav>
  )
}

export default NavBar