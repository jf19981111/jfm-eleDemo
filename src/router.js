import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home', component: () => import('./view/jf/jf-Home.vue')
        },
        {
            path: '/find', component: () => import('./view/jf/jf-Find.vue')
        },
        {
            path: '/order', component: () => import('./view/jf/jf-Order.vue')
        },
        {
            path: '/center', component: () => import('./view/jf/jf-Center.vue')
        }
    ]
})