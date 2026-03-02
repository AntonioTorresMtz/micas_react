import React from "react";

const CardProtectoresHome = ({ infoProtectores, children }) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[32%] bg-white border border-gray-200 rounded-xl shadow-sm mt-4">
      {infoProtectores && Object.keys(infoProtectores).length > 0 ? (
        <>
          <div className="w-full bg-gray-200 text-center p-3 rounded-t-xl">
            <h3 className="text-lg">{children}</h3>
          </div>
          <div className="w-full flex flex-wrap flex-row justify-between p-3">
            <p>Muro: {infoProtectores.muro}</p>
            <p>Posición: {infoProtectores.nombre}</p>
            <p>Cantidad: {infoProtectores.cantidad}</p>
          </div>
          <hr className="border-t-1 border-gray-300 my-4" />
          <div className="w-full flex flex-wrap flex-row p-3">
            <p>Notas: {infoProtectores.notas}</p>
          </div>
          <hr className="border-t-1 border-gray-300 my-4" />
          <div className="w-full flex flex-wrap flex-col p-3">
            <p>Compatibles:</p>
            <p>{infoProtectores.tipos_protectores}</p>
          </div>
          <hr className="border-t-1 border-gray-300 my-4" />
          <div className="w-full flex flex-wrap flex-col p-3">
            <p>Compatibles:</p>
            <p>{infoProtectores.modelos}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-full bg-gray-200 text-center p-3 rounded-t-xl">
            <h3 className="text-lg">{children}</h3>
          </div>
          <div className="p-4 text-center text-gray-600">
            <p>No tenemos registros de este modelo</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardProtectoresHome;
