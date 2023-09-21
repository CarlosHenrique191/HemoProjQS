<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h4 text-center">
        Registre-se
      </p>
      <div class="col-md-4 col-sn-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Name"
          v-model="form.name"
          outlined
          rounded
        />
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
            label="Registrar-se"
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

import useAuthUser from 'src/composables/UseAuthUser'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
   name: 'RegisterPage',

   setup () {
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      email: 'ferreira.h@aluno.ifsp.edu.br',
      password: '123456',
      name: 'Carlos Henrique'
    })
    const handleRegister = async () => {
      try{
        console.log(JSON.stringify(form.value));
        await register(form.value)
        router.push({
          path: '/email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert (error)
      }
    }
    return {
      form,
      handleRegister
    }
   }
})
</script>
