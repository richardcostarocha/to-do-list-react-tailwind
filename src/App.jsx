import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Lista from './Lista';
import AddLista from './AddLista';

const App = () => {
  return (
    <GlobalStorage>
      <div
        className=" h-screen  bg-yellow-100  flex flex-col justify-start
       items-center text-white"
      >
        <div className="mt-10 lg:mt-16 3xl:mt-20 bg-sky-800 px-6 sm:px-[20vw] lg:px-[26vw] xl:px-[32vw] ">
          <h1>Lista de tarefas</h1>
          <Lista />
          <AddLista />
        </div>
      </div>
    </GlobalStorage>
  );
};

export default App;
