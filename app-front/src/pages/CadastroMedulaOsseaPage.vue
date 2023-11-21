<template>
  <q-page padding>
    <header>
    <p>Regras para doação de medula medula ossea</p>
    </header>
    <body>
      <br>
      <p>
        - Ter entre 18 e 35 anos de idade
      </p>
      <p>
        - Estar em bom estado de saúde
      </p>
      <p>
        - Não ter doença infecciosa transmissível pelo sangue (como infecção pelo HIV ou hepatite)
      </p>
      <p>
        - Não apresentar história de doença neoplásica (câncer), hematológica ou autoimune (como lúpus eritematoso sistêmico e artrite reumatoide).
      </p>
      <p>
        <strong>
          * Regras retiradas do site oficial da GOV : https://www.gov.br/inca/pt-br/acesso-a-informacao/perguntas-frequentes/doacao-de-medula-ossea
        </strong>
      </p>
    </body>
    <div class="q-pa-md" style="max-width: 400px">

      <h4>
        Seja um doador
      </h4>

    <q-form
      @submit="handleSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.nome"
        label="Nome *"
        hint="Nome completo"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O nome é necessario']"
      />
      <q-input
        filled
        v-model="form.telefone"
        label="Telefone *"
        hint="Telefone(11000002222)"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O Telefone é necessario']"
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
  name: 'CadastroMedulaOsseaPage',
  setup () {

    const table = 'CadastroMedulaOssea'
    const router = useRouter()
    const { post } = useApi()
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      nome: ref(null),
      telefone: ref('11000002222')
    })

    const handleSubmit = async () => {
      try {
        await post(table, form.value)
        notifySuccess('Cadastro efetuado com sucesso')
        //router.push({ path: 'home' })
        //Temporario
        router.push({ path: 'HomePage' })
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

<style>

p {
  font-size: medium;
}
header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      font-size:x-large;
      margin-left: 1rem;
    }
  }

</style>