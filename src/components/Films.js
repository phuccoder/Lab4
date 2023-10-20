import React from "react";
import films from "../shared/ListOfFilms";
import { Link } from "react-router-dom";

export default function Films() {
  return (
    <div className="container">
      <div className="row row-content flex-wrap">
        {films.map((film) => (
          <div
            className="col col-sm-4 col-md-4"
            key={film.id}
            style={{ padding: "0 6px" }}
          >
            <div className="card">
              <img src={film.img} width="100%" />
              <h3>{film.title}</h3>
              <p className="title">
                {film.year}, {film.nation}
              </p>
              <Link to={`detail/${film.id}`}>
                <div className="btn btn-dark btn-lg btn-block">Detail</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
