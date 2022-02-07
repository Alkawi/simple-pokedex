import { useQuery } from "react-query";

const PokemonListItem = ({ name, url }: { name: string; url: string }) => {
  const { data, isLoading } = useQuery(
    ["pokemon-detail", name],
    async () => {
      return await fetch(url).then((res) => res.json());
    },
    { staleTime: 600_000 }
  );
  return <></>;
};

export default PokemonListItem;
