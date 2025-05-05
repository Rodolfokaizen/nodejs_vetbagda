import { salvarUsuarioNovoAnimal } from "../../repository/animalRepository.js";
import { validarNovoCadastroAnimal } from "../../validation/animal/animalValidation.js";

export default async function novoCadastroAnimalService(cadastroObjAnimal) {
    validarNovoCadastroAnimal(cadastroObjAnimal);

    return await salvarUsuarioNovoAnimal(cadastroObjAnimal);
 }