import React from 'react';
import { GlobalContext } from './GlobalContext';
const AddLista = () => {
  const global = React.useContext(GlobalContext);
  const [value, setValue] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value || !categoria) return;
    global.novaTarefa(value, categoria);
    setValue('');
    setCategoria('');
  };

  return (
    <>
      <div className="pt-5">
        <h2>Criar Tarefa:</h2>
        <form className="mb-4" onSubmit={handleSubmit}>
          <input
            className="text-black flex flex-col bg-yellow-50 box-border h-10 w-30 p-4 border-4 my-2"
            type="text"
            placeholder="Digite uma tarefa"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
          <select
            className=" text-black bg-yellow-50"
            value={categoria}
            onChange={({ target }) => setCategoria(target.value)}
          >
            <option value="">selecione uma categoria</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
          </select>
          <button
            className="text-black mx-2 bg-white rounded px-2"
            type="submit"
          >
            {' '}
            Criar tarefa
          </button>
        </form>
      </div>
    </>
  );
};

export default AddLista;
