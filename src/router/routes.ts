import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Главная',
                component: () => import('pages/IndexPage.vue'),
                meta: {
                    icon: 'home',
                },
            },
            {
                path: '/shedule',
                name: 'Расписание',
                component: () => import('pages/ShedulePage.vue'),
                meta: {
                    icon: 'dashboard',
                },
            },
            {
                path: '/certificate',
                name: 'Заказ справки',
                component: () => import('pages/CertificatePage.vue'),
                meta: {
                    icon: 'description',
                },
            },
            {
                path: '/profile',
                name: 'Профиль',
                component: () => import('pages/ProfilePage.vue'),
                meta: {
                    icon: 'account_circle',
                },
            },
            {
                path: '/logout',
                name: 'Выйти',
                component: () => import('pages/ProfilePage.vue'),
                meta: {
                    icon: 'logout',
                },
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export const navBarRouters = routes[0]?.children;
