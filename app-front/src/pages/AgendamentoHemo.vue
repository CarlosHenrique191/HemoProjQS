<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="Agendamento"
      class="q-gutter-md"
    >
      <q-date
        v-model="agendamento.data"
        mask="YYYY/MM/DD"
        title="Agendamento"
        subtitle="Data"
        color="red"
      />
      <q-time 
        v-model="agendamento.hora"
        mask="HH:mm:ss" 
        :options="optionsFnTime1"
        format24h
        color="red"
      />
      <q-input
        filled
        v-model="agendamento.cpf"
        label="CPF *"
        hint="CPF"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      
      <div>
        <q-btn label="Submit" type="submit" color="red"/>
      </div>
    </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { api } from 'boot/axios'
export default {
  data: function () {
    return {
      agendamento: {
        cpf: ref(null),
        data: ref('2023/08/17'),
        hora: ref('08:00:00')
      },
    };
  },
  methods: {
    Agendamento: function () {
        console.log(JSON.stringify(this.agendamento));
        return api.post("Agendamento", this.agendamento)
      },
  },
  name: 'AgendamentoHemo',
  setup () {
    const $q = useQuasar()
    return {

      optionsFnTime1 (hr) {
        if (hr < 8 || hr > 16) {
          return false
        }
        return true
      },
    }
  },
}
</script>
