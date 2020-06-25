import Home from "./components/Pages/Home";
import About from "./components/Pages/AboutUs";
import Contact from "./components/Pages/ContactUs.vue";
import Faq from "./components/Pages/Faq";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import ForgetPassword from "./components/Pages/ForgetPassword";


import VueRouter from 'vue-router';

const routes = [ 
    {
        path: "/signup",
        component: Signup,
        name: "signup",
    },
    {
        path: "/login",
        component: Login,
        name: "login",
    },
    {
        path: "/forgetpassword",
        component: ForgetPassword,
        name: "forgetpassword",
    },
    {
        path: "/",
        component: Home,
        name: "index",
    },
    {
        path: "/contact",
        component: Contact,
        name: "contact",
    },
    {
        path: "/faq",
        component: Faq,
        name: "faq",
    },
    {
        path: "/about",
        component: About,
        name: "about",
    }
]

const router  = new VueRouter({
   routes,
   mode: 'history',
    
});

export default router;