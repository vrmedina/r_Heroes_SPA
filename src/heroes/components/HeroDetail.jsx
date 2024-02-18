import { Link } from "react-router-dom";

export const HeroDetail = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col d-flex justify-content-center">
      <div
        className="card text-bg-light my-1 animate__animated animate__flipInX"
        style={{ maxWidth: "600px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`/assets/heroes/${id}.jpg`}
              className="img-fluid rounded-start h-100"
              alt={superhero}
            />
          </div>
          <div className="col-md-8">
            <div className="card-header text-bg-secondary fw-bold m-0 pt-3 rounded-0 rounded-end">
              <h5>{superhero}</h5>
            </div>
            <div className="card-body pt-3 bg-light">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light px-1 pt-0">
                  <span className="fw-bold">Alter ego: </span> {alter_ego}
                </li>
                <li className="list-group-item bg-light px-1">
                  <span className="fw-bold">First Appearance: </span>
                  {first_appearance}
                </li>
                {alter_ego !== characters && (
                  <li className="list-group-item bg-light px-1">
                    <span className="fw-bold">Characters: </span> {characters}
                  </li>
                )}
                <li className="list-group-item bg-light px-1 pb-0">
                  <span className="fw-bold">Publisher: </span> {publisher}
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <Link to={-1} className="btn btn-secondary w-50">
                Return
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
