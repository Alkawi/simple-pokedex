import { useQuery } from "react-query";

const PokemonDetails = ({ name }: { name: string }) => {
  const { data, isLoading } = useQuery(
    ["pokemon-detail", name],
    async () => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
        res.json()
      );
    },
    {
      staleTime: 600_000,
    }
  );

  return <>{!isLoading && JSON.stringify(data)}</>;
};

export default PokemonDetails;
