export function validarNovoCadastroAnimal(cadastroObjAnimal) {

    if (!cadastroObjAnimal.nome)
        throw new Error('Nome do animal e obrigatório.');  

    if (!cadastroObjAnimal.deficiencias)
        throw new Error('deficiencias e obrigatória.');

    if (!cadastroObjAnimal.intolerancias)
        throw new Error('intolerancias e obrigatório.');

    if (!(cadastroObjAnimal.data_nascimento))
        throw new Error('nascimento e obrigatório.');

    if (!cadastroObjAnimal.sexo)
        throw new Error('O sexo e obrigatório.');

}