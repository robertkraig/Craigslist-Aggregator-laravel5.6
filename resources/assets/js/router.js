import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import FetchContent from './components/FetchContent';
const router = new VueRouter({
    mode: 'history',
    routes:[
        {name:'stuff', path: '/stuff', component: FetchContent},
        {default:'jobs', name:'jobs', path: '/jobs', component: FetchContent},
        {name:'gigs', path: '/gigs', component: FetchContent},
        {name:'places', path: '/places', component: FetchContent},
        {name:'services', path: '/services', component: FetchContent},
    ],
});

export default router;