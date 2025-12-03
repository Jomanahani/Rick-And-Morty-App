import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchCharacterById, fetchEpisodes } from "../../api/rickAndMortyApi";
import { useNavigate, useParams } from "react-router-dom";
import { Character, Episode } from "../../types";
import {
  Section,
  DetailsContainer,
  ImageCard,
  InfoCard,
  BackIcon,
  EpisodesList,
  EpisodesCard,
} from "./style";
import ROUTES from "../../routes/routePaths";
import Spinner from "../../components/Spinner";
import EpisodeCard from "../../components/EpisodeCard";
import DataItem from "../../components/DataItem";

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const characterId = Number(id);
  const navigate = useNavigate();

  // Fetch character
  const { data, isLoading, error } = useQuery<Character, Error>({
    queryKey: ["character", characterId],
    queryFn: () => fetchCharacterById(characterId),
    enabled: !!characterId,
  });

  const episodeIds =
    data?.episode?.map((url) => Number(url.split("/").pop())) || [];

  const { data: episodes } = useQuery<Episode[], Error>({
    queryKey: ["episodes", episodeIds],
    queryFn: () => fetchEpisodes(episodeIds),
    enabled: episodeIds.length > 0,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No character data</p>;

  return (
    <Section>
      <BackIcon onClick={() => navigate(ROUTES.HOME)}>
        <span>←</span>
      </BackIcon>

      <DetailsContainer>
        {/* IMAGE */}
        <ImageCard>
          <img src={data.image} alt={data.name} />
        </ImageCard>

        {/* INFO */}
        <InfoCard>
          <h1>{data.name}</h1>
          <DataItem label="Status" value={data.status} />
          <DataItem label="Species" value={data.species} />
          <DataItem label="Gender" value={data.gender} />
          <DataItem label="Type" value={data.type} />
          <DataItem label="Origin" value={data.origin?.name} />
          <DataItem label="Location" value={data.location?.name} />
          <DataItem label="Episode Count" value={data.episode.length} />
        </InfoCard>

        {/* Episodes */}
        <EpisodesCard>
          <h2>Episodes :</h2>
          <EpisodesList>
            {episodes?.map((ep) => (
              <EpisodeCard
                episode={ep.episode}
                name={ep.name}
                air_date={ep.air_date}
                key={ep.id}
              />
            ))}
          </EpisodesList>
        </EpisodesCard>
      </DetailsContainer>
    </Section>
  );
};

export default CharacterDetails;
