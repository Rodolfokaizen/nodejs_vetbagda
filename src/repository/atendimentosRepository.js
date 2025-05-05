import con from "../repository/connection.js";

export async function salvarNovoAtendimento(atendimento) {
    let comando = `
        INSERT INTO atendimentos 
            (id_animal, id_usuario, descricao, atendimento_horas, hora_agendada, data_agendada, preco)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    let [info] = await con.query(comando, [
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

export async function consultarTodosAtendimentos() {
  let comando = `
                SELECT 
                  id_novoAtendimento     AS id,
                  id_animal,
                  id_usuario,
                  descricao,
                  atendimento_horas,
                  hora_agendada,
                  data_agendada,
                  preco
                FROM atendimentos
              `
  ;

            let [resposta] = await con.query(comando);
            return resposta;
}

export async function consultarAtendimentoPorId(id) {
  let comando = `
                  SELECT 
                    id_novoAtendimento AS id,
                    id_animal,
                    id_usuario,
                    descricao,
                    atendimento_horas,
                    hora_agendada,
                    data_agendada,
                    preco
                  FROM atendimentos
                  WHERE id_novoAtendimento = ?
                `
  ;

  let [linhas] = await con.query(comando, [id]);

  return linhas[0];
}

export async function atualizarAtendimento(id, atendimento) {
  let comando = `
    UPDATE atendimentos
                        SET id_animal = ?,
                            id_usuario = ?,
                            descricao = ?,
                            atendimento_horas = ?,
                            hora_agendada = ?,
                            data_agendada = ?,
                            preco = ?
                        WHERE id_novoAtendimento = ?
  `;

  let [resposta] = await con.query(comando, [
                        atendimento.id_animal,
                        atendimento.id_usuario,
                        atendimento.descricao,
                        atendimento.atendimento_horas,
                        atendimento.hora_agendada,
                        atendimento.data_agendada,
                        atendimento.preco,
                        id
        ])
  ;

  return resposta.affectedRows;
}

export async function deletarAtendimento(id) {
    let comando = `
      DELETE FROM atendimentos
      WHERE id_novoAtendimento = ?
    `;
  
    let [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
  }