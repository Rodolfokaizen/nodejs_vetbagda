import novoCadastroAnimalService from "../service/animal/novoCadastroAnimalService.js";
import consultarAnimalService from "../service/animal/consultarAnimalService.js";
import atualizarAnimalService from "../service/animal/atualizarAnimalService.js";
import deletarAnimalService from "../service/animal/deletarAnimalService.js";
import { Router } from "express";
const endpoints = Router();

//ok
endpoints.post('/cadastroAnimal', async (req, resp) => {
    try {
          let cadastroObjAnimal = req.body;

          let id = await novoCadastroAnimalService(cadastroObjAnimal);  

          resp.status(204).send();  
    } 
    catch (err) {
     logErro(err);
          resp.status(400).send(criarErro(err));
    }
   
})


//ok
endpoints.get('/cadastroAnimal', async(req, resp) => {
      try {

            let registros = await consultarAnimalService();
            resp.send(registros);
            
      } 
      catch (err) {
            logErro(err);
            resp.status(400).send(criarErro(err));
      }
})

//ok
endpoints.put('/cadastroAnimal/:id', async (req, resp) => {
      try {
        let id = req.params.id;
        let dados = req.body;
    
         await atualizarAnimalService(id, dados);
    
        resp.status(204).send();

      } 
      catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
      }
    });

    //ok
    endpoints.delete('/cadastroAnimal/:id', async (req, resp) => {
      try {
        let id = req.params.id;
    
        await deletarAnimalService(id);
    
        resp.status(204).send();
      } 
      catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));
      }
    });
    
export default endpoints;