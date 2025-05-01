

export function validarNovoCadastro(cadastroObj) {

    if (!cadastroObj.login)
        throw new Error('Nome do login obrigatório.');  

    if (!cadastroObj.senha)
        throw new Error('Senha e obrigatória.');

    if (!cadastroObj.nome)
        throw new Error('Nome e obrigatório.');

    if (!(cadastroObj.cpf))
        throw new Error('Cpf e obrigatório.');

    if (!cadastroObj.celular)
        throw new Error('O numero do celular e obrigatório.');

    if (!cadastroObj.data_nascimento)
        throw new Error('A data de nascimento e obrigatório.');

    if (!cadastroObj.endereco)
        throw new Error('O endereço e obrigatório.');

    if (!cadastroObj.cidade)
        throw new Error('A cidade e obrigatório.');

    if (!cadastroObj.estado)
        throw new Error('O estado e obrigatório.');

    if (!cadastroObj.cep)
        throw new Error('O CEP e obrigatório.');    

    if (isNaN(cadastroObj.cep))
        throw new Error('CEP e Invalido');

}

//aki novo
export function validarNovoCadastroUsuario(cadastroObj) {

    if (!cadastroObj.nome)
        throw new Error('Nome é obrigatório.');

    if (!(cadastroObj.cpf))
        throw new Error('CPF é obrigatório.');
        
    if (!cadastroObj.celular)
        throw new Error('O número do celular é obrigatório.');

    if (!cadastroObj.data_nascimento)
        throw new Error('A data de nascimento é obrigatória.');

    if (!cadastroObj.endereco)
        throw new Error('O endereço é obrigatório.');

    if (!cadastroObj.cidade)
        throw new Error('A cidade é obrigatória.');

    if (!cadastroObj.estado)
        throw new Error('O estado é obrigatório.');

    if (!cadastroObj.cep)
        throw new Error('CEP é inválido.');   

    if (isNaN(cadastroObj.cep))
        throw new Error

}




export function validarNovoCadastroId(registros) {
    if (registros.length == 0)
        throw new Error('Cadastro não encontrado!!');
}

