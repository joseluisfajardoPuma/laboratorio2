import React from 'react';

export const Boton = ({ texto, manejarClic }) => {
  return (
    <button
      onClick={manejarClic}
      >
      {texto}
    </button>
  );
}
