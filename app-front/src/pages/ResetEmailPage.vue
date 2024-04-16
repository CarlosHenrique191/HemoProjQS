<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleUpdateUser">
      <p class="col-12 text-h4 text-center">
        Solicitação de alteração de email
      </p>
      <div class="col-md-4 col-sn-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Novo email"
          v-model="email"
          outlined
          rounded
          :rules="[val => (val && val.length > 0) || 'Email é necessario']"
          type="email"
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
  name: 'resetEmail',
  setup () {
    const { updateEmail } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()
    const router = useRouter()

    const email = ref('')

    const handleUpdateUser = async () => {
      await updateEmail(email.value)
      router.push({ path: '/emailChange' })
      try {
        await updateEmail(email.value)
        notifySuccess('O email foi alterada com sucesso')
        
        router.push({ path: '/emailChange' })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      email,
      handleUpdateUser
    }
  }
})
</script>
