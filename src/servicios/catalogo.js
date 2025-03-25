import { cliente } from "./api";

export default {
  getObtenerMarcas() {
    return cliente.get(`/marcas`);
  },
  postLogin(data) {
    return cliente.post(`/login`, data);
  },
  getObtenerUsuarios() {
    return cliente.get(`/usuarios`);
  },
  postCrearUsuario(data) {
    return cliente.post(`/usuarios/crearUsuario`, data);
  },
  eliminarUsuario(id) {
    return cliente.delete(`/usuarios/${id}`);
  },
  patchActualizarUsuario(id, data) {
    return cliente.patch(`/usuarios/${id}`, data);
  },
  getObtenerMarcas() {
    return cliente.get(`/marcas`);
  },
  getObtenerModelos(id) {
    return cliente.get(`/modelos/obtenerModeloMarca/${id}`);
  },
  getObtenerMicaNormal(id) {
    return cliente.get(`/modelos/obtenerMicaNormal/${id}`);
  },
  getObtenerMicaCompleta(id) {
    return cliente.get(`/modelos/obtenerMicaCompleta/${id}`);
  },
  getObtenerMicaPrivacidad(id) {
    return cliente.get(`/modelos/obtenerMicaPrivacidad/${id}`);
  },
};
