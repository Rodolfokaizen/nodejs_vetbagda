import con from "../repository/connection.js";//aki

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