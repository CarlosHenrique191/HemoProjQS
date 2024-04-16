<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleUpdateName">
      <p class="col-12 text-h4 text-center">
        Solicitação de alteração de nome
      </p>
      <div class="col-md-4 col-sn-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Novo nome"
          v-model="form.username"
          outlined
          rounded
          :rules="[val => (val && val.length > 0) || 'Nome é necessario']"
        />
        <div class="full-width q-pt-md">
          <q-btn
            label="Mudar"
            color="primary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'resetNome',
  setup () {
    const { updateName } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()
    const router = useRouter()

    const form = ref({
      username: '',
    })

    const handleUpdateName = async () => {
      await updateName(form.value)
      router.push({ path: '/perfil' })
      try {
        await updateName(form.value)
        notifySuccess('O nome foi alterada com sucesso')
        router.push({ path: '/perfil' })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleUpdateName
    }
  }
})
</script>
