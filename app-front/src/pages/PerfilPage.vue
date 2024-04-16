<template>
  <q-page padding>
    <div v-if="user">
      <div class="row justify-center">
        <div class="row">
          <div class="full-width q-pt-md">
            <p class="col-12 text-h6 text-center">
              <em>Nome: </em> <strong> {{ user.user_metadata.username }} </strong>
            </p>
            <q-btn
                label="Alterar Nome"
                color="primary"
                class="full-width"
                size="sn"
                flat rounded
                to="/resetNome"
              />
          </div>
        </div>
        <p class="col-12 text-h6 text-center">
          <br>
          <em>Email: </em> <strong> {{ user.email }} </strong>
        </p>
        <div class="row">
          <div class="full-width q-pt-md">
            <q-btn
                label="Alterar senha"
                color="primary"
                class="full-width"
                size="sn"
                flat rounded
                to="/forgotPassword"
              />
          </div>
        </div>
        <div class="row">
          <div class="full-width q-pt-md">
            <q-btn
                label="Alterar Email"
                color="primary"
                class="full-width"
                size="sn"
                flat rounded
                to="/resetEmail"
              />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { DefineComponent } from 'vue';
import useAuthUser from 'src/composables/UseAuthUser';

export default {
  name: 'MeName',
  setup () {
    const { user } = useAuthUser()
    return {
      user
    }
  }
}
</script>
