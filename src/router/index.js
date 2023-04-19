import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: 'home'
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
            }, {
                path: "/server",
                name: "server",
                meta: {
                    title: 'serve'
                },
                component: () => import( /* webpackChunkName: "table" */ "../views/server.vue")
            },
            {
                path: "/download",
                name: "download",
                meta: {
                    title: 'download'
                },
                component: () => import( /* webpackChunkName: "table" */ "../views/download.vue")
            },
            {
                path: "/contact",
                name: "contact",
                meta: {
                    title: 'contact'
                },
                component: () => import( /* webpackChunkName: "table" */ "../views/contact.vue")
            },
            {
                path: "/test",
                name: "test",
                meta: {
                    title: 'test'
                },
                component: () => import( /* webpackChunkName: "table" */ "../views/test.vue")
            },
        ]
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     meta: {
    //         title: '登录'
    //     },
    //     component: () => import( /* webpackChunkName: "login" */ "../views/Login.vue")
    // }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});



export default router;