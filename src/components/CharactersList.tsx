import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/rickAndMortyApi";
import { CharactersResponse } from "../types";

const CharactersList = () => {
  const { data, isLoading, error } = useQuery<CharactersResponse, Error>({
    queryKey: ["characters"],    
    queryFn: () => fetchCharacters()
  });

  if (isLoading) return <p>جارٍ التحميل...</p>;
  if (error) return <p>حدث خطأ أثناء جلب البيانات</p>;

  return (
    <div>
      <div>
        {data && data.results.length ? (
          data.results.map((char) => (
            <div key={char.id}>
              <img src={char.image} alt={char.name} />
              <p>{char.name}</p>
            </div>
          ))
        ) : (
          <p>لا توجد شخصيات مطابقة</p>
        )}
      </div>
    </div>
  );
};

export default CharactersList;
