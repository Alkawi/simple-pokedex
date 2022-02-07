import { useQuery } from "react-query";
import { detailFetcher } from "../../Api";
import PokemonListItem from "./PokemonListItem";
import SkeletonListItem from "./SkeletonListItem";

const PokemonListItemWrapper = ({ name, url }: { name: string; url: string }) => {
  const { data, isLoading } = useQuery(["pokemon-detail", name], detailFetcher(name), { staleTime: 600_000 });

  return <>{!isLoading ? <PokemonListItem data={data} /> : <SkeletonListItem />}</>;
};

export default PokemonListItemWrapper;
