import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ShopsPage from "@/pages/ShopsPage.vue";
import ContactUs from "@/pages/ContactUs.vue";
import SlugPage from "@/pages/SlugPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'ShopsPage',
        path: '/shop',
        component: ShopsPage
    },
    {
        name: 'ContactUs',
        path: '/contact',
        component: ContactUs
    },
    {
        name: 'SlugPage',
        path: '/slug/:slug',
        component: SlugPage
    },
    {
        name: 'LoginPage',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'SignUpPage',
        path: '/signup',
        component: SignUpPage
    },
    {
        name: 'ProfilePage',
        path: '/profile',
        component: ProfilePage
    }


];



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;