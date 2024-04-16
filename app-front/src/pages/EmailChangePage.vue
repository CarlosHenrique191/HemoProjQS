<template>
  <q-page padding>
    <div class="row justify-center">
      <p class="col-12 text-h6 text-center">
        Para alterar o Email é necessario confirmar a alteração pelo email novo ou pelo email antigo: <strong>{{ user.email }}</strong> .
      </p>
      <div class="row">
        <div class="full-width q-pt-md">
          <q-btn
            label="Continuar"
            color="primary"
            class="full-width"
            size="lg"
            flat rounded
            :to="{ path: '/perfil' }"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

import useAuthUser from 'src/composables/UseAuthUser';

export default {
  name: 'EmailChange',
  setup () {
    const { user } = useAuthUser()

    return {
      user
    }
  }
}
</script>
