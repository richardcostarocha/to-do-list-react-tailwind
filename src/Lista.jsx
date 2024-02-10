import React from 'react';
import { GlobalContext } from './GlobalContext';
import Button from './Button';

const Lista = () => {
  const global = React.useContext(GlobalContext);
  
  return (
    <>
      {global.lista.map((list) => (
        <div className="py-2" key={list.id}>
          <div className="border-2 px-3 pb-1">
            {!list.completo && <p>{list.text}</p>}
            {!list.completo && <p>({list.categoria})</p>}
            {list.completo && (
              <p className="line-through text-red-500">{list.text}</p>
            )}
            {list.completo && (
              <p className="line-through text-red-500">({list.categoria})</p>
            )}
          </div>
          <div className="pt-2">
            <Button id={list.id} />
            <button
              className="bg-red-500 px-2 rounded"
              onClick={() => global.Delete(list.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Lista;
