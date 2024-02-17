import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { HeroDetail } from "../components/HeroDetail";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Navigate to={"heroes/marvel"} />;
  }
  return (
    <div className="row mt-3">
      <HeroDetail key={hero.id} {...hero} />
    </div>
  );
};
