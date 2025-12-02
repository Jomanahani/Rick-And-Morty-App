import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchCharacterById } from "../../api/rickAndMortyApi";
import { useParams } from "react-router-dom";
import { Character } from "../../types";

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();

  const characterId = Number(id);

  const { data, isLoading, error } = useQuery<Character, Error>({
    queryKey: ["character", characterId],
    queryFn: () => fetchCharacterById(characterId),
    enabled: !!characterId,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No character data</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
    </div>
  );
};

export default CharacterDetails;
