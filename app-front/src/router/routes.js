
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageUm.vue') },
      { path: 'pageDois', component: () => import('src/pages/pageDois.vue') },
      { path: 'agendamentoHemo', component: () => import('src/pages/AgendamentoHemo.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
