<template>
  <q-page padding>
    <div v-if="user">
      <p>
        Ola {{ user.user_metadata.username }}
      </p>
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
