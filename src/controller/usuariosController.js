import novoCadastroService from "../service/usuarios/novoCadastroService.js";
import consultarUsuarioService from "../service/usuarios/consultarUsuarioService.js";
import { Router } from "express";
const endpoints = Router();



endpoints.post('/cadastro', async (req, resp) => {
    try {
          let cadastroObj = req.body;

          let id = await novoCadastroService(cadastroObj);  

          resp.send({
               id: id
          })  
    } 
    catch (err) {
     logErro(err);
          resp.status(400).send(criarErro(err));
    }
   
})

endpoints.get('/cadastro', async(req, resp) => {
      try {
            let nome = req.body.nome;
            let registros = await consultarUsuarioService(nome);
            
            resp.send(registros);
      } 
      catch (err) {
            logErro(err);
            resp.status(400).send(criarErro(err));
      }
})

export default endpoints;