import con from './connection.js';


export async function salvarUsuarioNovo(usuarioNovo) {
    let comando = `
        INSERT INTO usuarios (a_login, b_senha, c_nome, d_cpf, e_celular, f_data_nascimento, g_endereco, h_cidade, i_estado, j_cep)
				VALUES (?,?,?,?,?,?,?,?,?,?)
    `
    let resposta = await con.query(comando, [usuarioNovo.login, usuarioNovo.senha, usuarioNovo.nome, usuarioNovo.cpf, usuarioNovo.celular, usuarioNovo.data_nascimento, usuarioNovo.endereco, usuarioNovo.cidade, usuarioNovo.estado, usuarioNovo.cep]);
    let info = resposta[0];

    let idUsuarioNovo = info.insertId;
    return idUsuarioNovo;
}


//aki novo
export async function salvarUsuarioNovoParaDogs(usuarioNovo) {
    let comando = `
        INSERT INTO usuarios (c_nome, d_cpf, e_celular, f_data_nascimento, g_endereco, h_cidade, i_estado, j_cep)
				VALUES (?,?,?,?,?,?,?,?)
    `
    let resposta = await con.query(comando, [usuarioNovo.nome, usuarioNovo.cpf, usuarioNovo.celular, usuarioNovo.data_nascimento, usuarioNovo.endereco, usuarioNovo.cidade, usuarioNovo.estado, usuarioNovo.cep]);
    let info = resposta[0];

    let idUsuarioNovo = info.insertId;
    return idUsuarioNovo;
}


export async function consultarUsuario(nome) {
        let comando =  `
                SELECT   
                        id_novoUsuario          Id,
                         c_nome                 Nome, 
                         d_cpf                  Cpf, 
                         e_celular              Celular, 
                         f_data_nascimento      Nascimento, 
                         g_endereco             Endereço, 
                         h_cidade               Cidade, 
                         i_estado               Estado, 
                         j_cep                  Cep
                   FROM usuarios
                  WHERE   c_nome like ?    
                   
        `

        let resposta = await con.query(comando, ['%' + nome + '%']);
        let registros = resposta[0];
        return registros;
}


export async function consultarUsuarioPorId(id) {
    let comando =  `
            SELECT   
                    id_novoUsuario          Id,
                     c_nome                 Nome, 
                     d_cpf                  Cpf, 
                     e_celular              Celular, 
                     f_data_nascimento      Nascimento, 
                     g_endereco             Endereço, 
                     h_cidade               Cidade, 
                     i_estado               Estado, 
                     j_cep                  Cep
               FROM usuarios
              WHERE   id_novoUsuario = ?    
               
    `

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];
    return registros;
}


export async function alterarUsuario(usuarioNovo, id) {
        let comando =  `
            UPDATE usuarios
            SET   c_nome = ?, 
                  d_cpf = ?, 
                  e_celular = ?, 
                  f_data_nascimento = ?, 
                  g_endereco = ?, 
                  h_cidade = ?, 
                  i_estado = ?, 
                  j_cep = ?
            WHERE  id_novoUsuario = ?    
        `;
    
        let resposta = await con.query(comando, [
            usuarioNovo.nome,
            usuarioNovo.cpf,
            usuarioNovo.celular,
            usuarioNovo.data_nascimento,
            usuarioNovo.endereco,
            usuarioNovo.cidade,
            usuarioNovo.estado,
            usuarioNovo.cep,
            id
        ]);
    
        let info = resposta[0];
    
        return {
            linhasAfetadas: info.affectedRows,
            linhasModificadas: info.changedRows
        };
    }
   
    
    export async function deletarUsuario(id) {
        let comando = `
        DELETE FROM usuarios WHERE id_novoUsuario = ?
        
        `
        let resposta = await con.query(comando, [id]);
        let info = resposta[0];
        
        let linhasAfetadas = info.affectedRows;
        return linhasAfetadas;
        
    }