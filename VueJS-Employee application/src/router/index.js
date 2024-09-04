import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import EmployeesView from "@/views/EmployeesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import EmployeeView from "@/views/EmployeeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/employees',
        name: 'employee',
        component: EmployeesView,
    },
    {
        path: '/employees/:id',
        name: 'employees',
        component: EmployeeView,
    },
    {
        path: '/:catchAll(.*)',
        name: 'not_found',
        component: NotFoundView,
    }],
});

export default router;
