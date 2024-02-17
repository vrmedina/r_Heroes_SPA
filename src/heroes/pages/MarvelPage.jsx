import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="mt-3">Marvel Comics</h1>
      <hr />
      <div className="container">
        <HeroList publisher="Marvel Comics" />
      </div>
    </>
  );
};
