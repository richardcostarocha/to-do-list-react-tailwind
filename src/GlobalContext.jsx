import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [id, setId] = React.useState(1);
  const [lista, setLista] = React.useState([
    
  ]);
  const novaTarefa = (text, categoria) => {
    if (id) setId((id) => id + 1);
    const novaLista = [
      ...lista,
      {
        id: id,
        text: text,
        categoria: categoria,
        completo: false,
      },
    ];
    setLista(novaLista);
    console.log(novaLista);
  };
  const Delete = (id) => {
    const filtroLista = lista.filter((list) => list.id !== id);
    setLista(filtroLista);
  };
  return (
    <GlobalContext.Provider value={{ lista, setLista, novaTarefa, Delete }}>
      {children}
    </GlobalContext.Provider>
  );
};
