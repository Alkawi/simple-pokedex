import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styles from "./PokemonListItem.module.css";

const PokemonListItem = ({ name, url }: { name: string; url: string }) => {
  const { data, isLoading } = useQuery(
    ["pokemon-detail", name],
    async () => {
      return await fetch(url).then((res) => res.json());
    },
    { staleTime: 600_000 }
  );
  return (
    <>
      {!isLoading && (
        <Link to={`/details/${data.name}`} className={styles["item-container"]}>
          <div>
            <img src={data.sprites.front_default} alt="" />
          </div>
          <div className={styles["item-content"]}>
            <div>
              #{data.id} <strong>{data.name}</strong>
            </div>
            <div>
              Types: {data.types.map((t: any) => t.type.name).join(", ")}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default PokemonListItem;
