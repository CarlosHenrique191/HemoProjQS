const AgendamentoService = require("../services/AgendamentoService.js");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        res.statusCode = 200; // Status HTTP para OK;
        AgendamentoService.getAllAgendamento().then(
            agendamento => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(agendamento));
            }            
        )
    },
    // Adicionar ao Banco
    post: function (req, res) {
        AgendamentoService.postNewAgendamento(
            req.body
        ).then((status) => {
            res.statusCode = 201; // Status HTTP para created;
            res.set("Content-Type", "application/json");
            res.send(JSON.stringify(status));
        }).catch(error => {
            console.error(error);
            res.statusCode = 500; //Status HTTP para erro interno
            res.set("Content-Type", "application/text");
            res.send(error.message);
        });
    },
    // Usado para listar
    get: function (req, res) {
        const AgendamentoId = req.params.Agendamento_id;
        AgendamentoService.getAgendamentoPorId(
            // req.params acessa os parâmetros passados na path definidos como :idparam
            AgendamentoId).then((agendamento) => {
                if(agendamento){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(agendamento));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse agendamento ${AgendamentoId}.`});
                }                
            });
    },
    //Remove do Banco
    delete: function (req, res) {
        AgendamentoService.deleteAgendamentoPorId(
            // req.params acessa os parâmetros passados na path definidos como :idparam no router
            req.params.AgendamentoId).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}