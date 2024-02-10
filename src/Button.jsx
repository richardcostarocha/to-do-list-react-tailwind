import React from 'react';
import { GlobalContext } from './GlobalContext';

const Button = ({ id }) => {
  const global = React.useContext(GlobalContext);
  const handleClick = () => {
    const newLista = global.lista.map((obj) =>
      obj.id === id ? { ...obj, completo: true } : obj,
    );
    global.setLista(newLista);
    console.log(global.lista);
  };
  return (
    <button
      className="bg-green-700 rounded mx-3 px-2 py-1 text-white
  "
      onClick={handleClick}
    >
      completar
    </button>
  );
};

export default Button;
