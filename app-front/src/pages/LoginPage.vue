<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h4 text-center">
        Login
      </p>
      <div class="col-md-4 col-sn-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Email"
          v-model="form.email"
          outlined
          rounded
          :rules="[val => (val && val.length > 0) || 'Email é necessario']"
          type="email"
        />
        <q-input
          label="Senha"
          v-model="form.password"
          outlined
          rounded
          :rules="[val => (val && val.length > 0) || 'Senha é necessaria']"
        />
        <div class="full-width q-pt-md">
          <q-btn
            label="Entrar"
            color="primary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
          />
        </div>
        <div class="full-width q-pt-md">
          <q-btn
            label="Registre-se"
            color="primary"
            class="full-width"
            size="sn"
            flat rounded
            to="/register"
          />
        </div>
        <div class="full-width q-pt-md">
          <q-btn
            label="Esqueci a senha"
            color="primary"
            class="full-width"
            size="sn"
            flat rounded
            to="/forgotPassword"
          />
        </div>
      </div>
    </q-form>

  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginPage',

  setup () {
    const router = useRouter()

    const { login, isLoggedIn } = useAuthUser()

    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      email: 'ferreira.h@aluno.ifsp.edu.br',
      password: '1234567'
    })

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ path: '/me'})
      }
    })
    const handleLogin = async () => {
      try{
        await login(form.value)
        notifySuccess('Login efetuado com sucesso')
        router.push({ path: '/me' })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
