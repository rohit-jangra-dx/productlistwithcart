<script setup lang="ts">
import DessertCard from '@/components/DessertCard/DessertCard.vue';
import Cart from './components/Cart/Cart.vue';
import { onMounted, ref } from 'vue';

const data = ref<any>(null)

onMounted(async ()=> {
  const response = await fetch('/assets/data.json')
  data.value = await response.json()
})


</script>

<template>
<div class="main_container" v-if="data">
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
<div v-else>Loading...</div>
</template>

