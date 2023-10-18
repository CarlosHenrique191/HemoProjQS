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
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn icon="mdi-delete-outline" color="negative" dense size="sm" @click="handleRemoveCategory(props.row)">
              <q-tooltip>
                Delete
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table> 
    </div>
  </q-page>
</template>

<script>

const columns = [
  { name: 'nome', align: 'center', label: 'Nome', field: 'nome', sortable: true },
  { name: 'data', align: 'center', label: 'data', field: 'data', sortable: true },
  { name: 'hora', align: 'center', label: 'hora', field: 'hora', sortable: true  },
  { name: 'actions', align: 'center', label: 'deletar', field: 'actions', sortable: true },
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
