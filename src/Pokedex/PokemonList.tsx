import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { listFetcher } from "../Api";
import PokemonListItem from "./PokemonListItem";
import styles from "./PokemonList.module.css";
import { observer } from "mobx-react-lite";

const PokemonList = ({ filter }: any) => {
  const { data, isLoading } = useQuery("pokemon-list", listFetcher(), {
    staleTime: 600_000,
  });

  return (
    <>
      {!isLoading &&
        data.results.filter(filter).map((e: any) => (
          <Link
            to={`/details/${e.name}`}
            key={e.name}
            className={styles["pokemon-link"]}
          >
            <PokemonListItem {...e} />
          </Link>
        ))}
    </>
  );
};

export default observer(PokemonList);
