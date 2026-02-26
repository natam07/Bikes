/*This is the item card component, where each product is displayed in a card with its image, name, colors and price. 
Data is passed through props since products.js */
<template>
    <div class="card">
        <div class="card-bg" :style="{ background: item.bgColor }"></div>
        <div class="imgBox">
            <img :src="item.image" alt="" />
        </div>
        <div class="contentBox">
            <h2>{{ item.name }}</h2>
            <div class="color">
                <h3>Color:</h3>
                <span v-for="color in item.Colors" :key="color.id" :style="{ backgroundColor: color.color }"></span>
            </div>
            <div class="pricing">
                <div class="price">
                    <span>${{ item.price }}</span>
                </div>
            </div>
            <Router-link to="/products" class="buy">Buy Now <i class="bi bi-arrow-right"></i></Router-link>
        </div>

    </div>
</template>

<script setup>
/*Data is being call like a object of the products.js*/
import '/src/CSS/ItemCard.css'
const props = defineProps({
    item: Object,
    required: true,
})
</script>