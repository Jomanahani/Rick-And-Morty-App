import React from "react";

import { Character } from "../../types";

import styled from "styled-components";

type AvatarProps = Pick<Character, "image">;

const CharacterImg = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
`;

const Avatar = ({ image }: AvatarProps) => (
  <CharacterImg src={image} alt="avatar" />
);

export default Avatar;
