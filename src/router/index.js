import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import CategoryDetailView from '../views/CategoryDetailView.vue'
import AddItemView from '../views/AddItemView.vue'
import StorageView from '../views/StorageView.vue'
import StorageDetailView from '../views/StorageDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView
    },
    {
      path: '/category/:id', 
      name: 'category-detail',
      component: CategoryDetailView,
      props: true 
    },
  {
      path: '/storage',
      name: 'storage',
      component: StorageView
    },
    {
      path: '/storage/:id', 
      name: 'storage-detail',
      component: StorageDetailView,
      props: true 
    },
    {
      path: '/add-item',
      name: 'add-item',
      component: AddItemView
    },
        {
      path: '/add-homepage',
      name: 'add-homepage',
      component: HomeView
    },
  ],
})

export default router
