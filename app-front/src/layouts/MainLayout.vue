<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          HemoProjQS
        </q-toolbar-title>

        <q-btn-dropdown flat color="white" icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu Principal
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useRouter } from 'vue-router'
import useAuthUser from 'src/composables/UseAuthUser'
import { useQuasar } from 'quasar'

const linksList = [
  {
    title: 'Home',
    caption: 'Pagina pricipal',
    icon: 'mdi-home',
    path: '/home',
  },
  {
    title: 'Perfil',
    caption: 'Pagina de perfil',
    icon: 'mdi-account',
    path: '/perfil',
  },
  {
    title: 'Agendar',
    caption: 'Em manutenção',
    icon: 'mdi-blood-bag',
    path: '/agendamentoHemo'
  },
  {
    title: 'Seus agendamentos',
    caption: 'Em manutenção',
    icon: 'mdi-table-clock',
    path: '/listaAgendamentosPage'
  },
  {
    title: 'Seus exames de sangue',
    caption: 'Previa',
    icon: 'mdi-note-multiple-outline',
    path: '/ExameRecentePage'
  },
  {
    title: 'Seus Atestados',
    caption: 'Previa',
    icon: 'mdi-file-multiple',
    path: '/AtestadoPage'
  },
  {
    title: 'Medula Ossea',
    caption: 'Seja um doador de medula ossea',
    icon: 'mdi-heart',
    path: '/CadastroMedulaOsseaPage'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const $q = useQuasar()

    const router = useRouter()

    const { logout } = useAuthUser()

    const handleLogout = async () => {
      $q.dialog({
        title: 'Logout',
        message: 'Voce tem certeza que deseja deslogar?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        await logout()
        router.replace({ path: '/login' })
      })
    }
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      handleLogout
    }
  }
})
</script>
