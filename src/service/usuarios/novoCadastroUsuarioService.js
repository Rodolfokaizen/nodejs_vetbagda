import { salvarUsuarioNovoParaDogs } from "../../repository/usuariosRepository.js";
import { validarNovoCadastroUsuario } from "../../validation/usuarios/usuariosValidation.js";

export default async function novoCadastroUsuarioService(cadastroObj) {
    validarNovoCadastroUsuario(cadastroObj);


    let id = await salvarUsuarioNovoParaDogs(cadastroObj);
    return id;
 }