import React from "react";

function ModalFilm({ setIsOpen, film }) {
  return (
    <div className="modal-show" onClick={() => setIsOpen(false)}>
      <div
        id="modal2"
        className="modal2"
        style={{ display: "block", top: "35%" }}
      >
        <div className="modal-content">
          <h4>Video for {film.title} </h4>
          <p>
            <iframe
              width="100%"
              height="400px"
              src={film.clip}
              title={film.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </p>
        </div>
        <div className="modal-footer">
          <a className="modal-close red-text">Close</a>
        </div>
      </div>
    </div>
  );
}

export { ModalFilm };
