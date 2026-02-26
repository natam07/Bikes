/* SideMenu component that displays a side menu with navigation links. */
<template>
    <div class="side-menu" :class="{ active: active }">
        <Nav></Nav>
    </div>
</template>

<script setup>
import Nav from './Nav.vue';
/*The component imports and uses the Nav component to display the navigation links within the side menu.*/
import '/src/CSS/sideMenu.css'

/*It receives an active prop to determine whether the menu should be displayed or hidden.*/
const props = defineProps({
    active: {
        type: Boolean,
        required: true
    }
})


</script>