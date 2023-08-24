<template>
  <q-page padding>
    <q-form class="row justify-center">
      <p class="text-h4 text-center">
        Login
      </p>
      <div class="col-md-4 col-sn-6 col-xs-10">
        <q-input
          label="Email"
          v-model="form.Email"
        />
      </div>
    </q-form>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',

  setup () {
    const form = ref({
      email: '',
      password: ''
    })

    return {
      form
    }
  }
})
</script>
