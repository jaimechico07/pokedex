import React from 'react';

const Loaders = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="/pokeball-loader.gif"
        alt="Mi GIF"
        className="w-64 h-64" // Establece el ancho y alto según tus necesidades
      />
    </div>
  );
};

export default Loaders;
