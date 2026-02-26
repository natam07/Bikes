/*This is the products view, where the products are displayed*/
<template>
    <section id="products" class="products">
        <div class="container">
            <div class="row">
                <h4 class="section-title">Products</h4>
            </div>
            <div class="row mt-4">
                <div class="col-xl-3 col-lg-4 col-md-6 mt-4" v-for="item in items" :key="item.id">
                    <ItemCard :item="item"/>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
/*Importing important data, css and components*/
import ItemCard from '/src/components/ItemCard.vue'
import '/src/CSS/products.css'
import { productsdata } from '@/data/products.js'
import { ref } from 'vue'

/*Transform data of "productsdata" in a constant that I can use in each card.*/
const items = ref(productsdata)
</script>