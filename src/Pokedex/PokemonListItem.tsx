import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Skeleton from "../Skeleton";
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
      {!isLoading ? (
        <Link to={`/details/${data.name}`} className={styles["item-container"]}>
          <div>
            <img
              src={data.sprites.front_default}
              alt=""
              width="96"
              height="96"
            />
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
      ) : (
        <div className={styles["item-container"]}>
          <Skeleton style={{ width: 96, height: 96 }} />
          <div className={styles["item-content"]}>
            <Skeleton style={{ width: 120, height: 21 }} />
            <Skeleton style={{ width: 256, height: 21 }} />
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonListItem;
