import { useQuery } from "react-query";
import { useParams } from "react-router";
import { detailFetcher } from "../Api";

const PokemonDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading } = useQuery(["pokemon-detail", name], detailFetcher(name), {
    staleTime: 600_000,
  });

  return <>{!isLoading && JSON.stringify(data)}</>;
};

export default PokemonDetails;
