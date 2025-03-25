import React, { useState, useEffect, use } from "react";
import catalogo from "../servicios/catalogo";
import FormSelect from "./Formularios/FormSelect";
import CardMicasHome from "./home/CardMicasHome";

const Home = () => {
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState("");
  const [selectedModelo, setSelectedModelo] = useState("");
  const [micas9h, setMicas9h] = useState([]);
  const [micas9d, setMicas9d] = useState([]);
  const [micas100d, setMicas100d] = useState([]);
  const [contBusqueda, setContBusqueda] = useState(false);

  const obtenerMarcas = async () => {
    try {
      const response = await catalogo.getObtenerMarcas();
      setMarcas(response.data.data);
    } catch (error) {
      console.error("Error al cargar los datos", error.response.data);
    }
  };

  const obtenerModelos = async (id) => {
    console.log(id);
    try {
      const response = await catalogo.getObtenerModelos(id);
      setModelos(response.data.data);
    } catch (error) {
      console.error("Error al cargar los datos", error.response.data);
    }
  };

  const obtenerMicasNormales = async (modelo) => {
    try {
      const response = await catalogo.getObtenerMicaNormal(modelo);
      if (response.data.data.length > 0) {
        setMicas9h(response.data.data);
        setContBusqueda(true);
      } else {
        setMicas9h(1);
        setContBusqueda(true);
      }
      console.log(micas9h);
    } catch (error) {
      console.error("Error al cargar los datos", error.response.data);
    }
  };

  const obtenerMicasCompletas = async (modelo) => {
    try {
      const response = await catalogo.getObtenerMicaCompleta(modelo);
      if (response.data.data.length > 0) {
        setMicas9d(response.data.data);
      } else {
        setMicas9d(1);
      }
      console.log(micas9d);
    } catch (error) {
      console.error("Error al cargar los datos", error.response.data);
    }
  };

  const obtenerMicasPrivacidad = async (modelo) => {
    try {
      const response = await catalogo.getObtenerMicaPrivacidad(modelo);
      setMicas100d(response.data.data);
    } catch (error) {
      console.error("Error al cargar los datos", error.response.data);
    }
  };

  useEffect(() => {
    obtenerMarcas(); // Llamar la función
  }, []);

  useEffect(() => {
    if (selectedModelo) {
      obtenerMicasNormales(selectedModelo);
      obtenerMicasCompletas(selectedModelo);
      obtenerMicasPrivacidad(selectedModelo);
    }
  }, [selectedModelo]);

  // useEffect para obtener los modelos cuando cambia `selectedMarca`
  useEffect(() => {
    if (selectedMarca) {
      obtenerModelos(selectedMarca); // Llamamos la API para obtener modelos cuando cambia la marca seleccionada
    }
  }, [selectedMarca]); // Este useEffect depende de `selectedMarca`

  const handleChange = (event) => {
    setSelectedMarca(event.target.value);
  };

  const handleChangeModelo = (event) => {
    setSelectedModelo(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-light mb-5">Buscar Modelo</h1>
      <div>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <label className="text-lg font-semibold">Marca:</label>
            <FormSelect
              className="w-80 p-2 border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500"
              valores={marcas}
              selectedValue={selectedMarca}
              cambio={handleChange}
              id={"id_marca"}
              nombre={"marca"}
            >
              Selecciona una marca
            </FormSelect>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold">Modelo:</label>
            <FormSelect
              valores={modelos}
              selectedValue={selectedModelo}
              cambio={handleChangeModelo}
              id={"id_modelo"}
              nombre={"nombre"}
            >
              Selecciona un modelo
            </FormSelect>
          </div>
        </div>
      </div>
      <div className="w-7/8 flex flex-wrap justify-between mt-4">
        {contBusqueda && (
          <>
            <CardMicasHome infoMicas={micas9h.length > 0 ? micas9h[0] : null}>
              Micas Normales
            </CardMicasHome>
            <CardMicasHome infoMicas={micas9d.length > 0 ? micas9d[0] : null}>
              Micas Completas
            </CardMicasHome>
            <CardMicasHome
              infoMicas={micas100d.length > 0 ? micas100d[0] : null}
            >
              Micas Privacidad
            </CardMicasHome>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
