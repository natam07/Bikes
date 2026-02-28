/* Navigation component that displays a list of navigation links. It uses data from navsdata and manages active state for each navigation item.*/
<template>
    <ul class="nav">
            <li v-for="nav in navs" :key="nav.id">
                <RouterLink  v-if="nav.name === 'Home'" :to="nav.link" :class="{active: nav.active}" @click="handleActive(nav.id)"><i class="bi bi-house-door-fill"></i></RouterLink>
                <RouterLink v-else :to="nav.link" :class="{active: nav.active}" @click="handleActive(nav.id)">{{ nav.name }}</RouterLink>
            </li>
        </ul>
</template>

<script setup>
import { navsdata } from '@/data/data'; 
import { ref } from 'vue';

const navs = ref(navsdata);

/* The component manages the active state of each navigation item by updating the active property in navsdata when a navigation link is clicked.
In this case, it just change the color because I only use one page.*/
const handleActive = (id) => {
    navs.value.map(nav => {
        nav.active = false; 
        if(nav.id === id) {
            nav.active = true;
            return nav;
        }
    });
}
</script>