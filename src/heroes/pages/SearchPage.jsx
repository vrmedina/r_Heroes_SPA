import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroDetail } from "../components/HeroDetail";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (evt) => {
    evt.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="container container-fluid">
      <h1 className="mt-3">Superhero Search</h1>
      <hr />
      <div className="card my-3" style={{ maxWidth: "1000px" }}>
        <div className="row g-0">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <div className="card-body border-start border-secondary-subtle">
              <h5 className="card-title">Search results...</h5>
              <div className="alert alert-secondary">
                <p className="p-0 m-0">Please search a Superhero first</p>
              </div>
              <div className="alert alert-danger">
                <p className="p-0 m-0">
                  We could not find a hero with name <b>{q}</b>
                </p>
              </div>
              <div className="row rows-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-3">
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
