 
import { salvarUsuarioNovo } from "../../repository/usuariosRepository.js";
import { validarNovoCadastro } from "../../validation/usuarios/usuariosValidation.js";


 export default async function novoCadastroService(cadastroObj) {
    validarNovoCadastro(cadastroObj);


    let id = await salvarUsuarioNovo(cadastroObj);
    return id;
 }