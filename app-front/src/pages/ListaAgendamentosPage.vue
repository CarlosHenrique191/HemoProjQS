<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-dynamic"
        flat bordered
        title="Agendamentos"
        :rows="agendamento"
        :columns="columns"
        row-key="id"

      />
    </div>
  </q-page>
</template>

<script>

const columns = [
  { name: 'nome', align: 'center', label: 'Nome', field: 'nome', sortable: true },
  { name: 'data', label: 'data', field: 'data', sortable: true },
  { name: 'hora', label: 'hora', field: 'hora', sortable: true  },
]

import { defineComponent, ref, onMounted } from 'vue'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
//import { columnsAgendamento } from './table'

export default defineComponent({
  name: 'ListaAgendamentosPage',
  setup () {
    const agendamento = ref([])
    const loading = ref(true)
    const router = useRouter()
    const $q = useQuasar()
    const { user } = useAuthUser()
    const table = 'agendamento'

    const { list } = useApi()
    const { notifyError } = useNotify()
    const handleListaAgendamentos = async () => {
      try {
        loading.value = true
        agendamento.value = await list(table)
        loading.value = false
      } catch (error) {
        notifyError(error.message)
      }
    }
    onMounted(() => {
      handleListaAgendamentos()
    })
    return {
      columns,
      agendamento,
      handleListaAgendamentos,
      loading
    }
  }
})
</script>
