<script setup lang="ts">
import DessertCard from '@/components/DessertCard/DessertCard.vue';
import data from '@/assets/data.json'
import Cart from './components/Cart/Cart.vue';


</script>

<template>
<div class="main_container">
  <div class="flex flex-col gap-[1rem]">
    <p class="dessert_title">Desserts</p>
    <div class="dessert_container">
      <DessertCard 
    v-for="(item, index) in data" 
    :key="index" 
    :category="item.category" 
    :name="item.name" 
    :price="item.price"
    :image_src_obj="item.image"/>
  </div>
  </div>

  <Cart :total_items="2"/>
</div>
</template>

