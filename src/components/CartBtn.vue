/*This is the cart button component, where I create a cart button with a count of items in the cart.*/
<template>
    <div class="cart-btn">
        <RouterLink to="/cart" class="cart">
            <i class="bi bi-basket"></i> </RouterLink>
            <span class="count">0</span>
    </div>
</template>

<script setup>
import '/src/CSS/cart.css'
</script>

