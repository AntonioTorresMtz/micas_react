import React, { Children } from "react";

const CardMicasHome = ({ infoMicas, children }) => {
  console.log("Valor de infoMicas:", infoMicas); // Depuración

  return (
    <div className="w-full md:w-[48%] lg:w-[32%] bg-white border border-gray-200 rounded-xl shadow-sm">
      {infoMicas && Object.keys(infoMicas).length > 0 ? (
        <>
          <div className="w-full bg-gray-200 text-center p-3 rounded-t-xl">
            <h3 className="text-lg">{children}</h3>
          </div>
          <div className="w-full flex flex-wrap flex-row justify-between p-3">
            <p>Muro: {infoMicas.muro}</p>
            <p>Posición: {infoMicas.nombre}</p>
            <p>Cantidad: {infoMicas.cantidad}</p>
          </div>
          <div className="w-full flex flex-wrap flex-row p-3">
            <p>
              Medidas: {infoMicas.ancho} x {infoMicas.largo}
            </p>
          </div>
          <hr className="border-t-1 border-gray-300 my-4" />
          <div className="w-full flex flex-wrap flex-row p-3">
            <p>Notas: {infoMicas.notas}</p>
          </div>
          <hr className="border-t-1 border-gray-300 my-4" />
          <div className="w-full flex flex-wrap flex-col p-3">
            <p>Compatibles:</p>
            <p>{infoMicas.modelos}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-full bg-gray-200 text-center p-3 rounded-t-xl">
            <h3 className="text-lg">Micas normales</h3>
          </div>
          <div className="p-4 text-center text-gray-600">
            <p>No tenemos registros de este modelo</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardMicasHome;
