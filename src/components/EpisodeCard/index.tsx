import React from "react";
import { Item } from "./style";

type EpisodeCardProps = {
  episode: string;
  name: string;
  air_date: string;
};
const EpisodeCard = ({ episode, name, air_date }: EpisodeCardProps) => {
  return (
    <Item>
      <strong>{episode}</strong> - {name} <br />
      <small>Air date: {air_date}</small>
    </Item>
  );
};

export default EpisodeCard;
