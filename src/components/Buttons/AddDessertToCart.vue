<script setup lang="ts">

defineProps<{
    quantity_count: number
    increment: ()=> void
    decrement: ()=> void
}>()
</script>

<template>
    <button class="add_dessert_to_cart_button overflow-hidden">
        <div v-if="quantity_count === 0" class="  flex gap-[.5rem] p-[.5rem_1.5rem]">
            <img src="/assets/images/icon-add-to-cart.svg"/>
            <p class="cart_button">Add to Cart</p>
        </div>
        <div v-else class="w-[163px] flex justify-between  p-[.5rem_1.5rem] bg-Red">
            <img role="button" @click.stop="increment" src="/assets/images/icon-increment-quantity.svg" alt="increase quantity button"/>
            <p class="cart_button">{{ quantity_count }}</p>
            <img role="button" @click.stop="decrement" src="/assets/images/icon-decrement-quantity.svg" />
        </div>
    </button>
</template>