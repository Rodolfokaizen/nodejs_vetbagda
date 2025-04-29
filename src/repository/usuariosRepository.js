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