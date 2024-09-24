<script setup lang="ts">
 import { cart} from '@/store/cartStore';
 import CardItem from '@/components/Cart/CardItem.vue';
</script>

<template>
    <div class=" bg-white w-[350px] h-fit p-[1rem] rounded-xl">
        <p class="cart_title">Your Cart ({{ cart.len}})</p>
         <!--cart items  -->
        <ul>
            <CardItem 
            v-for="(item, index) in cart.items" 
            :key="index" 
            :name="item.name"
            :price-per-item="item.pricePerItem"
            :quantity="item.quantity"
            :total-price="item.totalPrice"
            />
         </ul>
         <!-- cart total -->
          <div class="flex justify-between items-center py-[1.3rem]">
            <p class="dessert_name text-Rose-500 text-[.9rem]">Order Total</p>
            <p class="cart_price">{{ "$"+cart.totalAmount.toFixed(2) }}</p>
          </div>

          <!-- confirm order button -->
           <button class="cart_button text-white confirm_order_button">
                Confirm Order
           </button>
    </div>
</template>