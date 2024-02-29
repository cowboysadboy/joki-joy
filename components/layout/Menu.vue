<script setup lang="ts">
import { MENU_DATA } from './menu.data';
</script>

<template>
    <ul>
        <li v-for="elem, i in MENU_DATA" :key="i" class="link-wrapper">
            <nuxt-link :to="elem.url" class="link">
                {{ elem.name }}
            </nuxt-link>
        </li>
    </ul>
</template>
<style scoped lang="scss">
.link-wrapper {
    min-height: 150px;

    .link {
        display: flex;
        justify-content: space-evenly;
        transform: rotate(270deg) translate(-40%);
        font-family: 'DrukCyr', sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
        text-transform: uppercase;
        color: #ffff;

    }
}
</style>