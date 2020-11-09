import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({    
    base: '/',
    routes:[
        {
            path:'/',
            name: 'Home',
            component: () => import('../components/pages/Home.vue'),
        },
        {
            path:'/profile',
            name: 'Profile',
            component: () => import('../components/pages/Profile.vue'),
        },
        {
            path:'/catalog',
            name: 'Catalog',
            component: () => import('../components/pages/Catalog.vue'),
        },
        {
            path:'/eco-repository',
            name: 'EcoRepository',
            component: () => import('../components/pages/EcoRepository.vue'),
        },
        {
            path:'/reviews',
            name: 'Reviews',
            component: () => import('../components/pages/Reviews.vue'),
        },
        {
            path:'/settings',
            name: 'Settings',
            component: () => import('../components/pages/Settings.vue'),
        },
    ]
});