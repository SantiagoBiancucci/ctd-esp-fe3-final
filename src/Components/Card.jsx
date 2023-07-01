
import React from "react";
import "./Styles/Card.css";

const Card = ({ name, username, id, handleAddFav, isFav, showAddFavButton = true }) => {
  const addFav = () => {
    const favCard = { name, username, id };
    const existingFavs = localStorage.getItem("favs");
    const favs = existingFavs ? JSON.parse(existingFavs) : [];

    // Chequeo si ya existe en favoritos
    const isDuplicate = favs.some((fav) => fav.id === id);
    if (isDuplicate) {
      window.alert("este Doc ya está entre tus favoritos");
      return;
    }

    favs.push(favCard);
    localStorage.setItem("favs", JSON.stringify(favs));
    window.alert("Agregado a favoritos");
  };

  return (
    <div className="card">
      <div className="card__img">
        <img src="images/pediatrician.jpg" alt="Card Image" />
      </div>
      <div className="card__avatar">
        <img src="images/doctor.jpg" alt="Avatar" />
      </div>
      <div className="card__title">{name}</div>
      <div className="card__subtitle">{username}</div>
      <div className="card__subtitle">{id}</div>
      {showAddFavButton && !isFav && (
        <button onClick={addFav} className="card__btn">
          Add fav
        </button>
      )}
    </div>
  );
};

export default Card;
