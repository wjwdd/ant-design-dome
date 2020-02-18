export default {
    path: '/system',
	name: 'system',
	icon: 'setting',
    routes: [
        {
            path: '/system',
            redirect: '/system/account',
        },
        {
            path: '/system/account',
            name: 'account',
            component: './System/Account',
        },
        {
            path: '/system/roles',
            name: 'roles',
            component: './System/Roles',
        },
    ]
};