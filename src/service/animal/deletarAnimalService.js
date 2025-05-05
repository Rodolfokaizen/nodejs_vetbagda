import { deletarAnimal } from "../../repository/animalRepository.js";

export default async function deletarAnimalService(id) {
    
  return await deletarAnimal(id);
}
