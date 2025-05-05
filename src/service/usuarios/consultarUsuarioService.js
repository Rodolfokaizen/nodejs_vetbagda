import { consultarUsuario } from "../../repository/usuariosRepository.js";

export default async function consultarUsuarioService(nome) {
   
     let registros = await consultarUsuario(nome);
    return registros;
    
}