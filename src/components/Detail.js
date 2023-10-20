// import React from "react";
// import { useState, useRef, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Players from "../shared/Players";
// import { ModalCase } from "./ModalCase";
// import { Icon } from "react-materialize";

// export default function Detail() {
//   const [isOpen, setIsOpen] = useState(false);
//   const modalRef = useRef();

//   const userName = useParams();
//   const player = Players.find((player) => {
//     return player.id == userName.id;
//   });

//   let cost = player.cost.toLocaleString();

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         closeModal();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [modalRef]);

//   return (
//     <div className="container">
//       <div className="product-card">
//         <div className="badge">{player.name}</div>
//         <div className="product-tumb">
//           <img src={`../${player.img}`} alt="" />
//         </div>
//         <div className="product-details">
//           <h4>{player.club}</h4>
//           <div className="product-price">Market Value: ${cost}</div>
//           <p>{player.info}</p>
//           <div className="product-bottom-details">
//             <a
//               onClick={() => setIsOpen(true)}
//               className="btn-floating halfway-fab waves-effect waves-light red"
//             >
//               <Icon>ondemand_video</Icon>
//             </a>
//             {isOpen && <ModalCase player={player} setIsOpen={setIsOpen} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import films from "../shared/ListOfFilms";
import { Icon } from "react-materialize";
import { ModalFilm } from "./ModalFilm";

export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const userName = useParams();
  const film = films.find((film) => {
    return film.id == userName.id;
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className="container">
      <div className="product-card">
        <div className="badge">{film.title}</div>
        <div className="product-tumb">
          <img src={`../${film.img}`} alt="" />
        </div>
        <div className="product-details">
          <h4>{film.title}</h4>
          <p>{film.info}</p>

          <button
            onClick={() => setIsOpen(true)}
            className="btn-floating halfway-fab waves-effect waves-light red"
          >
            <Icon>ondemand_video</Icon>
          </button>
        </div>
      </div>

      {isOpen && <ModalFilm film={film} setIsOpen={setIsOpen} />}
    </div>
  );
}
