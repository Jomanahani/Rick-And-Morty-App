import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CharactersResponse } from "../../types";
import { fetchCharacters } from "../../api/rickAndMortyApi";
import CharacterCard from "../../components/CharacterCard";
import NavBar from "../../components/NavBar";
import { CharContainer } from "./style";
import Spinner from "../../components/Spinner";

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, error } = useQuery<CharactersResponse, Error>({
    queryKey: ["characters"],
    queryFn: () => fetchCharacters(),
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>حدث خطأ أثناء جلب البيانات</p>;

  const filteredCharacters = data?.results.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar
        name="Rick And Morty"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        resultsCount={filteredCharacters?.length}
      />
      <CharContainer>
        {filteredCharacters && filteredCharacters.length ? (
          filteredCharacters.map((char) => (
            <CharacterCard
              key={char.id}
              id={char.id}
              image={char.image}
              name={char.name}
              status={char.status}
            />
          ))
        ) : (
          <p>لا توجد شخصيات مطابقة</p>
        )}
      </CharContainer>
    </div>
  );
};

export default Characters;
