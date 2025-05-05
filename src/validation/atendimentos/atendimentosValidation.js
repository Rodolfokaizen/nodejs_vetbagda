export function validarNovoAtendimento(atendimento) {
    if (!atendimento.id_animal)
        throw new Error("ID do animal é obrigatório.");

    if (!atendimento.id_usuario)
        throw new Error("ID do usuário é obrigatório.");

    if (!atendimento.descricao)
        throw new Error("Descrição é obrigatória.");

    if (!atendimento.atendimento_horas)
        throw new Error("Duração do atendimento (horas) é obrigatória.");

    if (!atendimento.hora_agendada)
        throw new Error("Hora agendada é obrigatória.");

    if (!atendimento.data_agendada)
        throw new Error("Data agendada é obrigatória.");

    if (!atendimento.preco)
        throw new Error("Preço é obrigatório.");
}