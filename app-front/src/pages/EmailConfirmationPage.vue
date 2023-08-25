<template>
  <q-page padding>
    <div class="row justify-center">
      <p class="col-12 text-h5 text-center">
        Voce foi registrado com sucesso, Por favor confirme o seu email: <strong>{{ $route.query.email }}</strong> .
      </p>
      <div class="col-md-2 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-btn
          label="Back to Login"
          color="primary"
          class="full-width"
          flat rounded
          :to="{ path: '/login' }"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'emailConfirmation',
}
</script>
