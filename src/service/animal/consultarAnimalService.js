import { consultarAnimal } from "../../repository/animalRepository.js";



export default async function consultarAnimalService() {

    let registros = await consultarAnimal();
    return registros;
    
}