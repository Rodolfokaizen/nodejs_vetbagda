import novoCadastroAnimalService from "../service/animal/novoCadastroAnimalService.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/cadastroAnimal', async (req, resp) => {
    try {
          let cadastroObjAnimal = req.body;

          let id = await novoCadastroAnimalService(cadastroObjAnimal);  

          resp.send({
               id: id
          })  
    } 
    catch (err) {
     logErro(err);
          resp.status(400).send(criarErro(err));
    }
   
})



export default endpoints;