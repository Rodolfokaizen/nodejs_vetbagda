import { deletarAtendimento } from "../../repository/atendimentosRepository.js";

export default async function deletarAtendimentoService(id) {
  let linhasAfetadas = await deletarAtendimento(id);
  return linhasAfetadas;
}