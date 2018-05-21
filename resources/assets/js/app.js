import Vue from 'vue';
import Layout from './Layout';
import router from './router';
import store from './store';

const app = new Vue({
    mode: 'history',
    components:{
        Layout
    },
    router,
    store,
    mounted()
    {
        console.log('app.js vue mounted');
    }
}).$mount('#app');
