import { salvarNovoAtendimento } from "../../repository/atendimentosRepository.js";
import { validarNovoAtendimento } from "../../validation/atendimentos/atendimentosValidation.js";

export default async function novoCadastroAtendimentoService(atendimento) {
    validarNovoAtendimento(atendimento);
    return await salvarNovoAtendimento(atendimento);
}
