import Index from "./components/FooterComponent";
// import Example2 from "./components/Example2";
import Signup from "./components/SignupComponent";
import Login from "./components/LoginComponent";
import ForgetPassword from "./components/ForgetpasswordComponent";
import Contact from "./components/ContactComponent";
import FAQ from "./components/faqComponent";
import ABOUT from "./components/AboutUs";
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
        component: Index,
        name: "index",
    },
    {
        path: "/contact",
        component: Contact,
        name: "contact",
    },
    {
        path: "/faq",
        component: FAQ,
        name: "faq",
    },
    {
        path: "/about",
        component: ABOUT,
        name: "about",
    }
]

const router  = new VueRouter({
   routes,
   mode: 'history',
    
});

export default router;