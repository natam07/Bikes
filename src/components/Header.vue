/*This is the header component, where the logo, navigation and cart button are displayed. This is the top of the page./
<template>
    <header id="home">
        <RouterLink to="/" class="logo">Bikes</RouterLink>
        <Nav></Nav>
        <div class="feature"> 
            <CartBtn></CartBtn>
        </div>
    </header>
</template>
<script setup>
import '/src/CSS/header.css'
import CartBtn from '/src/components/CartBtn.vue';
import Nav from './Nav.vue';

</script>
