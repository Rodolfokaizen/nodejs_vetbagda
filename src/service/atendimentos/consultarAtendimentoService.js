import { consultarAtendimentoPorId } from "../../repository/atendimentosRepository.js";

export default async function consultarAtendimentoService(id) {
  return await consultarAtendimentoPorId(id);
}