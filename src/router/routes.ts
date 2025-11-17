import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', name: 'Главная', component: () => import('pages/IndexPage.vue') },
            {
                path: '/shedule',
                name: 'Расписание',
                component: () => import('pages/ShedulePage.vue'),
            },
            {
                path: '/certificate',
                name: 'Заказ справки',
                component: () => import('pages/CertificatePage.vue'),
            },
            { path: '/profile', name: 'Профиль', component: () => import('pages/ProfilePage.vue') },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
