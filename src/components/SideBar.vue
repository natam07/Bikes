/* SideBar component that displays a sidebar with a menu button and social media links. 
It manages the active state of the sidebar menu and toggles it when the menu button is clicked. 
The component also imports and uses the SideMenu component to display the sidebar menu content.*/
<template>
    <div class="sideBar">
        <a class="menu" :class="{ active: active }"><i class="bi bi-menu-app-fill"
                @click.stop.prevent="handleToggleMenu"></i></a>
        <ul class="social">
            <li v-for="social in socials" :key="social.id">
                <a :href="social.link">
                    <i :class="social.icon"></i>
                </a>
            </li>
        </ul>
    </div>
    <SideMenu :active="active"></SideMenu>
</template>

<script setup>
import { ref } from 'vue';
import SideMenu from './SideMenu.vue';
import '/src/CSS/SideBar.css'

const socials = [
    {
        id: 'Facebook',
        icon: 'bi bi-facebook',
        link: 'https://www.facebook.com/yourprofile'
    },
    {
        id: 'Twitter',
        icon: 'bi bi-twitter',
        link: 'https://www.twitter.com/yourprofile'
    },
    {
        id: 'Instagram',
        icon: 'bi bi-instagram',
        link: 'https://www.instagram.com/yourprofile'
    },
]

const active = ref(false);

const handleToggleMenu = () => {
    active.value = !active.value;
}

</script>
