
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

     Vue.component(
        'footer-component',
         require('./components/FooterComponent.vue').default);

         Vue.component(
            'footer-main',
             require('./components/FooterMain.vue').default);

             Vue.component(
                'header-component',
                 require('./components/HeaderComponent.vue').default);
                 Vue.component(
                    'big-logo',
                     require('./components/BigLogo.vue').default);
                     Vue.component(
                        'social-login',
                         require('./components/SocialLogin.vue').default);
                         Vue.component(
                            'forgot-password',
                             require('./components/ForgotPassword.vue').default);
                             Vue.component(
                              'footer-index',
                               require('./components/FooterIndex.vue').default);
                               Vue.component(
                                 'app-component',
                                  require('./components/AppComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,
    components: {
        "index" : Index

}
});
