import { consultarUsuarioPorId } from "../../repository/usuariosRepository.js";
import { validarNovoCadastroId } from "../../validation/usuarios/usuariosValidation.js"

export default async function consultarUsuarioPorIdService (id) {
        let registros = await consultarUsuarioPorId(id);
        validarNovoCadastroId(registros);

        let cadastro = registros[0];
        return cadastro;
}