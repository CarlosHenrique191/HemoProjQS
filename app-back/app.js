const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const AgendamentoRotas = require("./src/api/routes/Agendamento");
const app = express();

    //Configuração dos middlewares
    app.use(cors());
    app.use(bodyParser.json());

    //Configuração das rotas da API
    
    app.use("/api", AgendamentoRotas);

    module.exports = app;