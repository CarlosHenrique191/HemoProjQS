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
          type="email"
        />
        <q-input
          label="Password"
          v-model="form.password"
          outlined
          rounded
        />
        <div class="full-width q-pt-md">
          <q-btn
            label="Login"
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
            label="Register"
            color="primary"
            class="full-width"
            size="lg"
            flat rounded
            to="/register"
          />
        </div>
      </div>
    </q-form>

  </q-page>
</template>

<script>
import useAuthUser from 'src/composables/UseAuthUser'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginPage',

  setup () {
    const router = useRouter()

    const { login } = useAuthUser()

    const form = ref({
      email: 'ferreira.h@aluno.ifsp.edu.br',
      password: '123456'
    })

    const handleLogin = async () => {
      try{
        await login(form.value)
        router.push({ path: '/me' })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
