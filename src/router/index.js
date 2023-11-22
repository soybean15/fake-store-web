import { createRouter,  createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import { storeToRefs } from 'pinia';
import { useNavStore } from '@/store/nav';

const routes = [
  {
    path: '/',
    name: 'main',
    redirect:'home',
    component: MainView,
    children:[
      {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
        beforeEnter:(to, from, next)=>{
          const nav = useNavStore();
          const { active } = storeToRefs(nav);
        
        
          console.log(to.name)
          active.value =to.name;
        
        
          next();

        }
      },
      {
        path: '/products',
        name: 'products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue'),
        beforeEnter:(to, from, next)=>{
          const nav = useNavStore();
          const { active } = storeToRefs(nav);
        
        
          console.log(to.name)
          active.value =to.name;
        
        
          next();

        }
      },
      {
        path:'product/:id',
        name:'product',
        component:()=> import('@/views/components/ProductView')
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
        beforeEnter:(to, from, next)=>{
          const nav = useNavStore();
          const { active } = storeToRefs(nav);
        
        
          console.log(to.name)
          active.value =to.name;
        
        
          next();

        }
      },
      

    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
