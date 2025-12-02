import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CharactersResponse } from "../../types";
import { fetchCharacters } from "../../api/rickAndMortyApi";
import { Link } from "react-router-dom";

const Characters = () => {
  const { data, isLoading, error } = useQuery<CharactersResponse, Error>({
    queryKey: ["characters"],
    queryFn: () => fetchCharacters(),
  });

  if (isLoading) return <p>جارٍ التحميل...</p>;
  if (error) return <p>حدث خطأ أثناء جلب البيانات</p>;

  return (
    <div>
      {data && data.results.length ? (
        data.results.map((char) => (
          <div key={char.id}>
            <img src={char.image} alt={char.name} />
            <Link to={`/characters/${char.id}`}>{char.name}</Link>
          </div>
        ))
      ) : (
        <p>لا توجد شخصيات مطابقة</p>
      )}
    </div>
  );
};

export default Characters;
