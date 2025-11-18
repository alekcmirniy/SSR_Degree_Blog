<template>
    <q-layout view="hHr lpR ffr">

        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    Title
                </q-toolbar-title>

                <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
            </q-toolbar>

            <div class="nav-container">
                <q-tabs v-for="(route, idx) in navBarRouters" :key="idx" align="left">
                    <q-route-tab :icon="route.meta.icon || 'home'" :to="route.path" exact />
                </q-tabs>

            </div>

        </q-header>

        <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer elevated class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    <div>Title</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script>
import { ref } from 'vue'
import { navBarRouters } from 'src/router/routes';

export default {
    setup() {
        const rightDrawerOpen = ref(false)

        return {
            navBarRouters,
            rightDrawerOpen,
            toggleRightDrawer() {
                rightDrawerOpen.value = !rightDrawerOpen.value
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-container {
    display: flex;
    flex-direction: row;
}
</style>