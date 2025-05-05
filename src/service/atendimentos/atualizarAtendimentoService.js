import { atualizarAtendimento } from "../../repository/atendimentosRepository.js";

export default async function atualizarAtendimentoService(id, atendimento) {
  let linhasAfetadas = await atualizarAtendimento(id, atendimento);
  return linhasAfetadas;
}