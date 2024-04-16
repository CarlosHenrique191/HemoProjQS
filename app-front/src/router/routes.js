
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      { path: 'emailConfirmation', component: () => import('pages/EmailConfirmationPage.vue') },
      { path: 'forgotPassword', component: () => import('pages/ForgotPasswordPage.vue') },
      { path: 'resetPassword', component: () => import('pages/ResetPasswordPage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageUm.vue') },
      { path: 'me', component: () => import('pages/MePage.vue') },
      { path: 'home', component: () => import('src/pages/HomePage.vue') },
      { path: 'agendamentoHemo', component: () => import('src/pages/AgendamentoHemo.vue') },
      { path: 'listaAgendamentosPage', component: () => import('src/pages/ListaAgendamentosPage.vue') },
      { path: 'ExameRecentePage', component: () => import('src/pages/ExameRecentePage.vue') },
      { path: 'AtestadoPage', component: () => import('src/pages/AtestadoPage.vue') },
      { path: 'CadastroMedulaOsseaPage', component: () => import('src/pages/CadastroMedulaOsseaPage.vue') },
      { path: 'perfil', component: () => import('src/pages/PerfilPage.vue') },
      { path: 'resetEmail', component: () => import('src/pages/ResetEmailPage.vue') },
      { path: 'resetNome', component: () => import('src/pages/ResetNomePage.vue') },
      { path: 'emailChange', component: () => import('src/pages/EmailChangePage.vue') },
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
