import { Router } from "express";
import novoCadastroAtendimentoService from "../service/atendimentos/novoAtendimentoService.js";

const endpoints = Router();

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

export default endpoints;
