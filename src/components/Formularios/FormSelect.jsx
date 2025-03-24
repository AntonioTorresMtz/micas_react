import React from "react";

const FormSelect = ({
  valores,
  selectedValue,
  cambio,
  id,
  nombre,
  children,
}) => {
  return (
    <select
      className="w-80 p-2 border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500"
      value={selectedValue} // ✅ Esto almacena el valor seleccionado
      onChange={cambio}
    >
      <option value="">{children}</option>
      {valores.map(
        (
          valor // ✅ Ahora `marcas` es la lista de opciones
        ) => (
          <option key={valor[id]} value={valor[id]}>
            {valor[nombre]}
          </option>
        )
      )}
    </select>
  );
};

export default FormSelect;
