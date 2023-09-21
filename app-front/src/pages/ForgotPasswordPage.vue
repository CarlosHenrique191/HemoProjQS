<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleForgotPassword">
      <p class="col-12 text-h4 text-center">
        Solicitação de alteração de senha
      </p>
      <div class="col-md-4 col-sn-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Email"
          v-model="email"
          outlined
          rounded
          type="email"
        />
        <div class="full-width q-pt-md">
          <q-btn
            label="Enviar Solicitação por Email"
            color="primary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
          />
        </div>
        <div>
          <q-btn
              label="Back"
              color="dark"
              class="full-width"
              rounded
              flat
              to="/login"
            />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser';

export default defineComponent({
  name: 'forgotPassword',
  setup () {
    const { sendPasswordRestEmail } = useAuthUser()

    const email = ref('')

    const handleForgotPassword = async () => {
      await sendPasswordRestEmail(email.value)
      alert(`A solicitação para a alteração de senha foi enviado para: ${email.value}`) 
    }

    return {
      email,
      handleForgotPassword
    }
  }
})
</script>
