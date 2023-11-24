import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import ResultView from '../views/ResultView.vue'
import Swal from 'sweetalert2'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/result',
      name: 'result',
      component: ResultView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'result' && !localStorage.destination) {
    next({ name: 'form' })
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill the form',
    })
  } else {
    next()
  }
})

export default router
