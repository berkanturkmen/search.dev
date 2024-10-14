import { createRouter, createWebHistory } from "vue-router";

import Forgot from "../views/Auth/Forgot.vue";
import Login from "../views/Auth/Login.vue";
import Password from "../views/Auth/Password.vue";
import Profile from "../views/Auth/Profile.vue";
import Register from "../views/Auth/Register.vue";
import Reset from "../views/Auth/Reset.vue";

import Explore from "../views/Explore.vue";
import Index from "../views/Index.vue";
import Search from "../views/Search.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/Auth/Forgot",
			name: "Auth.Forgot",
			component: Forgot,
		},
		{
			path: "/Auth/Login",
			name: "Auth.Login",
			component: Login,
		},
		{
			path: "/Auth/Password",
			name: "Auth.Password",
			component: Password,
		},
		{
			path: "/Auth/Profile",
			name: "Auth.Profile",
			component: Profile,
		},
		{
			path: "/Auth/Register",
			name: "Auth.Register",
			component: Register,
		},
		{
			path: "/Auth/Reset",
			name: "Auth.Reset",
			component: Reset,
		},
		{
			path: "/Explore",
			name: "Explore",
			component: Explore,
		},
		{
			path: "/",
			name: "Index",
			redirect: "/Auth/Login",
		},
		{
			path: "/Search",
			name: "Search",
			component: Search,
		},
	],
});

export default router;
