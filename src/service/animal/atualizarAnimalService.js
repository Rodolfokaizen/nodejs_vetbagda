import { atualizarAnimal } from "../../repository/animalRepository.js";

export default async function atualizarAnimalService(id, dados) {
  return await atualizarAnimal(id, dados);
}
