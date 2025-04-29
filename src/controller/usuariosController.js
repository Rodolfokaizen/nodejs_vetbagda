import novoCadastroService from "../service/usuarios/novoCadastroService.js";
import consultarUsuarioService from "../service/usuarios/consultarUsuarioService.js";
import consultarUsuarioPorIdService from "../service/usuarios/consultarUsuarioPorIdService.js"
import alterarUsuarioService from "../service/usuarios/alterarUsuarioService.js";
import deletarUsuarioSerice from "../service/usuarios/deletarUsuarioService.js";

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


endpoints.get('/cadastro/:id', async (req, resp) => {
      try {
          let id = req.params.id;  

          let cadastro = await consultarUsuarioPorIdService(id);

          resp.send(cadastro);

      } 
      catch (err) {
            logErro(err);
            resp.status(400).send(criarErro(err));
      }
})


endpoints.put('/cadastro/:id', async (req, resp) => {
  try {
       let cadastroObj = req.body;
       let id = req.params.id;

       await alterarUsuarioService(cadastroObj, id);

       resp.status(204).send();
     }
      catch (err) {
      logErro(err);
      resp.status(400).send(criarErro(err));
     }
     
})


endpoints.delete('/cadastro/:id', async (req, resp) => {
      try {
           let id = req.params.id;
    
           await deletarUsuarioSerice(id);
    
           resp.status(204).send();
         }
          catch (err) {
          logErro(err);
          resp.status(400).send(criarErro(err));
         }
         
    })


export default endpoints;