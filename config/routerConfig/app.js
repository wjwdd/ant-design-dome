import home from './home';
import system from './system';
export default {
	path: '/',
	component: '../layouts/BasicLayout',
	Routes: ['src/pages/Authorized'],
	authority: ['admin', 'user'],
	routes: [
		home,
		system,
		{
			component: './404',
		},
	],
};
