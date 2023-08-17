const {Agendamento} = require("../../database/models")

module.exports = {
    getAllAgendamento: async function (){
        const data = await Agendamento.findAll();
        return data;
    },

    getAgendamentoPorId: async function (AgendamentoId){
        const data = await Agendamento.findOne({ where: { id: AgendamentoId }})
        return data;
    },

    postNewAgendamento: async function (agendamento){
        const data = await Agendamento.create(agendamento);
        //colocar no banco
        if(data) return {status: "Agendamento efetuado com sucesso."}
        else return {status: "Não foi possível fazer um agendamento"}
    },
    
    deleteAgendamentoPorId: async function(AgendamentoId) {
        const status = await Agendamento.destroy(AgendamentoId);
        if(status) return {status: "Agendamento removido com sucesso."}
        else return {status: "Agendamento não encontrado."}
    }
}