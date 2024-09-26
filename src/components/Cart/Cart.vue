<script setup lang="ts">
 import { cart} from '@/store/cartStore';
 import CardItem from '@/components/Cart/CardItem.vue';
import { ref } from 'vue';
import ConfirmOrderModal from '@/components/ConfirmOrderModal.vue/ConfirmOrderModal.vue';

const showOrderConfirmationModal = ref<boolean>(false)

const openModal = () => {
  showOrderConfirmationModal.value = true
}

const closeModal = () => {
  showOrderConfirmationModal.value = false
}

</script>

<template>
    <div class=" bg-white w-[350px] h-fit p-[1.5rem] rounded-xl">
        <p class="cart_title">Your Cart ({{ cart.len}})</p>
        
        <div v-if="cart.len" class="flex flex-col gap-[1.5rem]">
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
         <div class="flex justify-between items-center">
           <p class="dessert_name text-Rose-500 text-[.9rem]">Order Total</p>
            <p class="cart_total_price">{{ "$"+cart.totalAmount.toFixed(2) }}</p>
          </div>
          
          <!-- feature  -->
           <div class="flex items-center justify-center gap-[1rem] py-[.8rem] bg-Rose-100 rounded-lg">
            <img src="/assets/images/icon-carbon-neutral.svg"/>
            <p class="dessert_category">This is a <strong class=" text-Rose-600">carbon-neutral</strong> delivery</p>
           </div>
          <!-- confirm order button -->
          <button @click="openModal" class="cart_button text-white confirm_order_button">
            Confirm Order
          </button>
        </div>
        <!--empty state  -->
        <div v-else class="flex  flex-col items-center pb-[1rem]">
          <img src="/assets/images/illustration-empty-cart.svg" alt="illustration"/>
          <p class="dessert_category">Your added items will appear here</p>
        </div>
        <!-- the dialog box for confiming the order and reset the cart -->
         <ConfirmOrderModal :show_modal="showOrderConfirmationModal" @close="closeModal"/>
        </div>
</template>