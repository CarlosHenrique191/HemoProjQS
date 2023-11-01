    <template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-dynamic"
        flat bordered
        title="Exames"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn icon="mdi-upload" color="blue" dense size="sm" href="/ExamedeSangue.pdf" download>
              <q-tooltip>
                Baixar
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table> 
    </div>
  </q-page>
</template>
    

<script>
//<a href="/ExamedeSangue.pdf" download></a>
const columns = [
  { name: 'nome', align: 'center', label: 'Exame', field: 'nome', sortable: true },
  { name: 'data', align: 'center', label: 'data', field: 'data', sortable: true },
  { name: 'actions', align: 'center', label: 'Baixar', field: 'actions', sortable: true },
]

const rows = [

  {
    nome: 'ExameExemplo01',
    data: '22/01/2023',
  }
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>
