<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="handleSubmit"
      class="q-gutter-md"
    >
      <q-date
        v-model="form.data"
        mask="YYYY/MM/DD"
        title="Agendamento"
        subtitle="Data"
        color="red"
      />
      <q-time 
        v-model="form.hora"
        mask="HH:mm:ss" 
        :options="optionsFnTime1"
        format24h
        color="red"
      />
      <q-input
        filled
        v-model="form.nome"
        label="Nome *"
        hint="Nome completo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O nome é necessario']"
      />
      
      <div>
        <q-btn label="Confirmar" type="submit" color="red"/>
      </div>
    </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'

export default defineComponent ({
  name: 'AgendamentoHemo',
  setup () {

    const table = 'agendamento'
    const router = useRouter()
    const { post } = useApi()
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      nome: ref(null),
      data: ref('2023/08/17'),
      hora: ref('08:00:00')
    })

    const handleSubmit = async () => {
      try {
        await post(table, form.value)
        notifySuccess('Agendado com sucesso')
        //router.push({ path: 'home' })
        //Temporario
        router.push({ path: 'listaAgendamentosPage' })
      } catch (error) {
        notifyError(error.message)
      }
    }
    return {
      handleSubmit,
      form,

      optionsFnTime1 (hr) {
        if (hr < 8 || hr > 16) {
          return false
        }
        return true
      },
    }
  }
})
</script>
