export default {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: './user/login' },
    ],
};
