const {Router} = require("express");

const AgendamentoController = require("../controllers/AgendamentoController")

const routes = Router();

routes.get("/Agendamento", AgendamentoController.listAll);
routes.get("/Agendamento/:Agendamento_id", AgendamentoController.get);
routes.post("/Agendamento", AgendamentoController.post);
routes.delete("/Agendamento/:Agendamento_id", AgendamentoController.delete);

module.exports = routes; 