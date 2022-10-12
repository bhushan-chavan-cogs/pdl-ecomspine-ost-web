import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddEmployeeView from '../views/Employees/AddEmployee.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/employee/add',
    name: 'AddEmployeeView',
    component: AddEmployeeView
  }  
]

/* const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
*/ 
export default function (history: any) {
  return createRouter({
    history,
    routes
  })
}

/** /
router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  console.log(to)
  const publicPages = ['/']
  const authRequired = !publicPages.includes(to.path)
  const auth = useCommonStore()

  if (authRequired && !auth.getBrandVal) {
    return '/'
  }
})
/**/

// export default router
