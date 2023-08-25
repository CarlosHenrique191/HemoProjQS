<template>
  <q-page padding>
    <div v-if="user">
      <p>
        Ola {{ user.user_metadata.name }}
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
