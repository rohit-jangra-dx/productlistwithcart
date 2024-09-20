<script setup lang="ts">
import DessertImage from '@/components/DessertCard/DessertImage.vue';
import AddDessertToCart from '@/components/Buttons/AddDessertToCart.vue';
import { DessertCardProps } from './DessertCard.vue';

const props = defineProps<DessertCardProps>()

</script>


<template>
    <div class=" relative bg-red-500">
        <DessertImage :image_src_obj="image_src_obj" :use_case="'profile'"/>
        <AddDessertToCart/>
    </div>
</template>