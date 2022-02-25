import React, { useState, createContext } from "react";

export const Context = createContext(null);

const PageContextProvider = ({ children }) => {
  //nombres de jugadores
  const [jugador1, setJugador1] = useState("");
  const [jugador2, setJugador2] = useState("");

  //A quien le toca?
  const [XoO, setXoO] = useState(null);

  //array of players
  const [players, setPlayers] = useState([
    { player: false, puntaje: 0, jug: "X" },
    { player: false, puntaje: 0, jug: "O" },
  ]);

  //error
  const [errorNoHayJug1, seterrorNoHayJug1] = useState(true);
  const [errorNoHayJug2, seterrorNoHayJug2] = useState(true);

  return (
    <Context.Provider
      value={{
        jugador1,
        setJugador1,
        jugador2,
        setJugador2,
        setXoO,
        XoO,
        players,
        setPlayers,
        errorNoHayJug1,
        seterrorNoHayJug1,
        errorNoHayJug2,
        seterrorNoHayJug2,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default PageContextProvider;
