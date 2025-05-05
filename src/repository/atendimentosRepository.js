import con from "../repository/connection.js";

export async function salvarNovoAtendimento(atendimento) {
    const comando = `
        INSERT INTO atendimentos 
            (id_animal, id_usuario, descricao, atendimento_horas, hora_agendada, data_agendada, preco)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const [info] = await con.query(comando, [
        atendimento.id_animal,
        atendimento.id_usuario,
        atendimento.descricao,
        atendimento.atendimento_horas,
        atendimento.hora_agendada,
        atendimento.data_agendada,
        atendimento.preco
    ]);

    return info.insertId;
}
