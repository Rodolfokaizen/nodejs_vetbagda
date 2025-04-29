import { alterarUsuario } from "../../repository/usuariosRepository.js";



export default async function alterarUsuarioService(cadastroObj, id) {
    let resultado = await alterarUsuario(cadastroObj, id);

    if (resultado.linhasAfetadas === 0)
        throw new Error('Cadastro não encontrado!');
    else if (resultado.linhasModificadas === 0)
        throw new Error('Nenhuma informação foi alterada!');
}
