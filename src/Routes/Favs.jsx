import React, { useReducer } from "react";
import Card from "../Components/Card";
import { useGlobalState } from "../Components/utils/global.context";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    case "REMOVE_ALL_FAVS":
      return [];
    default:
      return state;
  }
}

const Favs = () => {
  const { theme } = useGlobalState();
  const [favs, dispatch] = useReducer(reducer, initialState);

  const handleAddFav = (favCard) => {
    // Verificar si la Card ya existe en favoritos
    const isDuplicate = favs.some((fav) => fav.id === favCard.id);
    if (isDuplicate) {
      window.alert("Esta Card ya está en favoritos");
      return;
    }

    dispatch({ type: "ADD_FAV", payload: favCard });
    localStorage.setItem("favs", JSON.stringify([...favs, favCard]));
    window.alert("Agregado a favoritos");
  };

  const handleRemoveAllFavs = () => {
    dispatch({ type: "REMOVE_ALL_FAVS" });
    localStorage.removeItem("favs");
  };

  const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      {storedFavs.length > 0 && (
        <button onClick={handleRemoveAllFavs}>Eliminar todos</button>
      )}
      <div className="card-grid">
        {storedFavs.map((fav) => (
          <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
            handleAddFav={handleAddFav}
            isFav={favs.some((f) => f.id === fav.id)}
            showAddFavButton={false} // Nueva prop para ocultar el botón
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
