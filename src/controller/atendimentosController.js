import { Router } from "express";
import novoCadastroAtendimentoService from "../service/atendimentos/novoAtendimentoService.js";
import deletarAtendimentoService from "../service/atendimentos/deletarAtendimentoService.js";
import atualizarAtendimentoService from "../service/atendimentos/atualizarAtendimentoService.js";
import consultarAtendimentoService from "../service/atendimentos/consultarAtendimentoService.js";
import consultarTodosAtendimentosService from "../service/atendimentos/consultarTodosAtendimentosService.js";

const endpoints = Router();

//ok
endpoints.post('/cadastroAtendimento', async (req, resp) => {
    try {
        const atendimento = req.body;

        const id = await novoCadastroAtendimentoService(atendimento);

        resp.send({ 
            id: id 
        });
    } 
    catch (err) {
        logErro(err);
             resp.status(400).send(criarErro(err));
    }
});

//ok  GET TODOS 
endpoints.get('/cadastroAtendimento', async (req, resp) => {
        try {
            let lista = await consultarTodosAtendimentosService();
             resp.send(lista);
        } 
        catch (err) {
            logErro(err);
            resp.status(400).send(criarErro(err));
        }
});

//ok GET por ID
endpoints.get('/cadastroAtendimento/:id', async (req, resp) => {
    try {
      const id = req.params.id;
  
      const atendimento = await consultarAtendimentoService(id);
  
      if (!atendimento) {
        return resp.status(404).send({ erro: 'Atendimento não encontrado!' });
      }
  
      resp.send(atendimento);
    } 
    catch (err) {
      logErro(err);
      resp.status(400).send(criarErro(err));
    }
  });
  
//ok
endpoints.put('/cadastroAtendimento/:id', async (req, resp) => {
    try {
      let id = req.params.id;
      let atendimento = req.body;
  
      await atualizarAtendimentoService(id, atendimento);
  
      resp.status(204).send();
    } 
    catch (err) {
      logErro(err);
      resp.status(400).send(criarErro(err));
    }
  });
  
//ok
endpoints.delete('/cadastroAtendimento/:id', async (req, resp) => {
    try {
          let id = req.params.id;
  
          await deletarAtendimentoService(id);

  
          resp.status(204).send();
    } 
    catch (err) {
      logErro(err);
      resp.status(400).send(criarErro(err));
    }
  });
  
export default endpoints;