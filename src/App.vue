/*This is the principal page, when I call important components and where view is rendered*/
<template>
  <SideBar></SideBar>
  <Header></Header>
  <products></products>

</template>

<script setup>

/*Importing important components*/
import Header from '@/components/Header.vue';
import SideBar from './components/SideBar.vue';
import products from './view/products.vue';

</script>

<style scoped></style>
