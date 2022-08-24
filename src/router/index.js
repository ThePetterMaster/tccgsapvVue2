import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectionSortView from '../views/SelectionSortView.vue'
import InsertionSortView from '../views/InsertionSortView.vue'
import BubbleSortView from '../views/BubbleSortView.vue'
import ShellSortView from '../views/ShellSortView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SelectionSort',
    component: SelectionSortView
  },
  {
    path: '/InsertionSort',
    name: 'InsertionSort',
    component: InsertionSortView
  },
  {
    path: '/BubbleSort',
    name: 'BubbleSort',
    component: BubbleSortView
  },
  {
    path: '/ShellSort',
    name: 'ShellSortView',
    component: ShellSortView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
