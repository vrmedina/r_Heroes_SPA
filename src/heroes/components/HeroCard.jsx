import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={`/assets/heroes/${id}.jpg`}
          className="card-img-top img-fluid p-2"
          alt={superhero}
        />
        <div className="card-header mb-0 pb-0">
          <h5 className="card-title">{superhero}</h5>
        </div>
        <div className="card-body p-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-2">
              <span className="fw-bold">Alter ego: </span> {alter_ego}
            </li>
            <li className="list-group-item px-2">
              <span className="fw-bold">First Appearance: </span>
              {first_appearance}
            </li>
            {alter_ego !== characters && (
              <li className="list-group-item px-2">
                <span className="fw-bold">Characters: </span> {characters}
              </li>
            )}
            <li className="list-group-item px-2">
              <span className="fw-bold">Publisher: </span> {publisher}
            </li>
          </ul>
        </div>
        <div className="text-bg-secondary border border-dark border-opacity-50 rounded-bottom">
          <Link to={`/heroes/hero/${id}`} className="btn btn-secondary w-100 m-0 px-0"> Ver mas...</Link>
        </div>
      </div>
    </div>
  );
};
