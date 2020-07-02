
require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router';
import Index from './index'

Vue.use(VueRouter)

import router from './routes'
import User from './Helpers/Users'
window.User = User
console.log(User.id())

window.Vue = require('vue');

// Vue.component(
//     'example-component',
//      require('./components/ExampleComponent.vue').default);

    
         Vue.component(
            'footer-component',
             require('./components/FooterComponent.vue').default);

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
                            'forgot-password-component',
                             require('./components/ForgotPasswordComponent.vue').default);
                             Vue.component(
                              'mainfooter-component',
                               require('./components/MainfooterComponent.vue').default);
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
