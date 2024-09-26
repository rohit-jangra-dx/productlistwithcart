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
        <div v-else class="w-[163px] flex justify-between items-center  p-[.5rem_.7rem] bg-Red">
            <button class="borderd_round_button" @click.stop="increment">
                <img class="item_increase_decrease_img"  src="/assets/images/icon-increment-quantity.svg" alt="increase quantity button"/>
            </button>
            <p class="cart_button text-Rose-50">{{ quantity_count }}</p>
            <button class="borderd_round_button" @click.stop="decrement">
                <img class="item_increase_decrease_img"  src="/assets/images/icon-decrement-quantity.svg" />
            </button>
        </div>
    </button>
</template>