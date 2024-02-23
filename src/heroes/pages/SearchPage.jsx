import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (evt) => {
    evt.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="container container-fluid">
      <h1 className="mt-3">Superhero Search</h1>
      <hr />
      <div className="card my-3" style={{ maxWidth: "1000px" }}>
        <div className="row g-0">
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
            <div className="card-body">
              <h5 className="card-title">Search</h5>
              <hr />
              <form onSubmit={onSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search a Superhero"
                  className="form-control"
                  name="searchText"
                  value={searchText}
                  onChange={onInputChange}
                  autoComplete="off"
                />
                <button className="btn btn-secondary mt-2">Search</button>
              </form>
            </div>
          </div>
          <div className="col-xs-12 col-sm col-md-7 col-lg-8">
            <div className="card-body border-start border-secondary-subtle">
              <h5 className="card-title">Search results...</h5>
              <div
                className="alert alert-secondary animate__animated animate__headShake"
                style={{ display: showSearch ? "" : "none" }}
                aria-label="alert-no-text"
              >
                <p className="p-0 m-0">
                  Please introduce the name of a superhero
                </p>
              </div>
              <div
                className="alert alert-danger animate__animated animate__headShake"
                style={{ display: showError ? "" : "none" }}
                aria-label="alert-no-hero"
              >
                <p className="p-0 m-0">
                  We could not find a hero with name <b>{q}</b>
                </p>
              </div>
              <div className="row rows-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
                {heroes.map((hero) => (
                  <HeroCard key={hero.id} {...hero} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
