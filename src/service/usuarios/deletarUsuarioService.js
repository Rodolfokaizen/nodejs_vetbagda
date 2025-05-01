import { deletarUsuario } from "../../repository/usuariosRepository.js";



export default async function deletarUsuarioSerice(id) {
    let linhasAfetadas = await deletarUsuario(id);
    if (linhasAfetadas == 0)
        throw new Error('Nenhum Usuario foi removido.');
    
}