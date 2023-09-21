<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset">
      <p class="col-12 text-h4 text-center">
        Solicitação de alteração de senha
      </p>
      <div class="col-md-4 col-sn-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Nova senha"
          v-model="password"
          outlined
          rounded
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
//import useNotify from 'src/composables/UseNotify'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'resetPassword',
  setup () {
    const { resetPassword } = useAuthUser()
    //const { notifyError, notifySuccess } = useNotify()
    const router = useRouter()
    const route = useRoute()
    const token = route.query.token

    const password = ref('')

    const handlePasswordReset = async () => {
      await resetPassword(token, password.value)
      router.push({ path: '/login' })
      //try {
      //  await resetPassword(token, password.value)
      //  notifySuccess('New Password Sent')
      //  router.push({ path: '/login' })
      //} catch (error) {
      //  notifyError(error.message)
      //}
    }

    return {
      password,
      handlePasswordReset
    }
  }
})
</script>
