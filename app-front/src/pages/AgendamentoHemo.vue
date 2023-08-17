<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-date
        v-model="date"
        title="Agendamento"
        subtitle="Data"
      />
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      
      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />
      
      <q-toggle v-model="accept" label="Eu li as regras para a doação de sangue" />
      
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
  name: 'AgendamentoHemo',
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Voce precisa ler as regras de doação antes de prosseguir'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      },
      //DATA
      date: ref('2023/08/17')
    }
  },
  //Envio ao Banco
  data: function () {
        return {
            agendamento: {
                data: null,
                hora: null,
                cpf: null
            },
        };
    },
    methods: {
        Agendamento: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.agendamento));
            this.$axios
                .$post("Agendamento", this.agendamento)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-agendamento');
                    this.show = false;
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo agendamento');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-agendamento');
                    this.show = false;
                });
        },


    }
}
</script>
