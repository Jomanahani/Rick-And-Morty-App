import React from "react";

import { Card, Details, Name, Status } from "./style";

import { Character } from "../../types";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";

type CharacterProps = Pick<Character, "id" | "image" | "name" | "status">;

const CharacterCard = ({ id, image, name, status }: CharacterProps) => {
  return (
    <Link to={`/characters/${id}`} style={{ textDecoration: "none" }}>
      <Card>
        <Avatar image={image} />
        <Details>
          <Name>{name}</Name>
          <Status>{status}</Status>
        </Details>
      </Card>
    </Link>
  );
};

export default CharacterCard;
