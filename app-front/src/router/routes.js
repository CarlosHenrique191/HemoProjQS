
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      { path: 'emailConfirmation', component: () => import('pages/EmailConfirmationPage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageUm.vue') },
      { path: 'Me', component: () => import('pages/MePage.vue') },
      { path: 'Home', component: () => import('src/pages/HomePage.vue') },
      { path: 'agendamentoHemo', component: () => import('src/pages/AgendamentoHemo.vue') }
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
