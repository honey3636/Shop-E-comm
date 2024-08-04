import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ShopsPage from "@/pages/ShopsPage.vue";
import ContactUs from "@/pages/ContactUs.vue";
import SlugPage from "@/pages/SlugPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import CartPage from "@/pages/CartPage.vue";
import MyOrders from "@/views/Profile/MyOrders.vue";
import MyProfile from "@/views/Profile/MyProfile.vue";

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
        component: ProfilePage,
        children: [
            {
                name: 'MyOrders',
                path: '/orders',
                component: MyOrders,
                meta: { requiresAuth: true,transition: 'slide-right' }
            },
            {
                name: 'MyProfile',
                path: '/myprofile',
                component: MyProfile,
                meta: { requiresAuth: true,transition: 'slide-right' }

            }
        ]
        
    },
    {
        name: "CartPage",
        path: '/cart',
        component: CartPage,
        
    }


];



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;