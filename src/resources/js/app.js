
require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "./index";

Vue.use(VueRouter)

import router from "./routes";

window.Vue = require('vue');

// Vue.component(
//     'example-component',
//      require('./components/ExampleComponent.vue').default);

//      Vue.component(
//         'example-2',
//          require('./components/Example2.vue').default);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index" : Index
    }
});
