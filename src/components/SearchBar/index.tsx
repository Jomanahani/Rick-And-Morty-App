import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
width: 70%;
background-color: #8f750eb1;
border: none;
outline: none;
border-radius: 1rem;
padding: 1rem;
color: #1C1C1C;
&::placeholder{
    color: #181201ca;
}
`
const SearchBar = () => {
  return (
    <Input placeholder='Search for character...' />
        
  )
}

export default SearchBar