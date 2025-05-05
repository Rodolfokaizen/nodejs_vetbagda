import con from "../repository/connection.js";

export async function salvarUsuarioNovoAnimal(usuarioNovoAnimal) {
    let comando = `
        INSERT INTO animais (id_novousuario, nome, deficiencias, intolerancias, data_nascimento, sexo)
                VALUES (?,?,?,?,?,?)
    `

    let resposta = await con.query(comando, [
      usuarioNovoAnimal.id_usuario, 
        usuarioNovoAnimal.nome,
         usuarioNovoAnimal.deficiencias,
          usuarioNovoAnimal.intolerancias,
           usuarioNovoAnimal.data_nascimento,
            usuarioNovoAnimal.sexo]);
    
    return resposta.insertId;
}

export async function consultarAnimal() {
  let comando =  `
          SELECT   
                   id_novoAnimal           id_novoAnimal, 
                   id_novoUsuario          id_novoUsuario, 
                   nome                    nome, 
                   deficiencias            deficiencias, 
                   intolerancias           intolerancias, 
                   data_nascimento         nascimento,
                   sexo                    sexo 
                FROM animais
             
             
  `

          

            let [registros] = await con.query(comando);
            console.log(registros);
            return registros;

}


export async function atualizarAnimal(id, dados) {
  let comando = `
          UPDATE animais
                  SET   nome = ?, 
                        deficiencias = ?, 
                        intolerancias = ?, 
                        data_nascimento = ?, 
                        sexo = ?
                      WHERE id_novoAnimal = ?
          `
  ;

  let parametros = [
    dados.nome,
    dados.deficiencias,
    dados.intolerancias,
    dados.data_nascimento,
    dados.sexo,
    id
  ];

  let resposta = await con.query(comando, parametros);
  return resposta[0].affectedRows;
}

export async function deletarAnimal(id) {
  let comando = `
                DELETE FROM animais
                WHERE  id_novoAnimal = ?
              `
  
  ;

  let resposta = await con.query(comando, [id]);
  return resposta[0].affectedRows;
}
