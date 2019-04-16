import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('./view/jf/Index.vue'),
            children: [
                {
                    path: 'home',
                    component: () => import('./view/jf/jf-Home.vue'),
                },
                {
                    path: 'order', component: () => import('./view/jf/jf-Order.vue')
                },
                {
                    path: 'center', component: () => import('./view/jf/jf-Center.vue')
                },
                {
                    path: '',
                    redirect: '/home'
                }
            ]
        },
        {
            path: '/map',
            component: () => import('./components/map.vue')
        },
        {
            path: '/goods',
            component: () => import('./components/goods.vue')
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})