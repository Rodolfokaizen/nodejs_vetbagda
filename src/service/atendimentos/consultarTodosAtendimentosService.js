import { consultarTodosAtendimentos } from '../../repository/atendimentosRepository.js';

export default async function consultarTodosAtendimentosService() {
  const lista = await consultarTodosAtendimentos();
  return lista;
}