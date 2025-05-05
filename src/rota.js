import usuarioController from './controller/usuariosController.js';
import animalController from './controller/animalController.js';
import atendimentosController from './controller/atendimentosController.js';

export default function adicionarRotas(servidor) {
   servidor.use(usuarioController);
   servidor.use(animalController);
   servidor.use(atendimentosController);
   
}



