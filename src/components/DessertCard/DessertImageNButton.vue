<script setup lang="ts">
import DessertImage from '@/components/DessertCard/DessertImage.vue';
import AddDessertToCart from '@/components/Buttons/AddDessertToCart.vue';
import { DessertCardProps } from './DessertCard.vue';
import { cart, DessertItem } from '@/store/cartStore';
import { computed } from 'vue';

const props = defineProps<DessertCardProps>()

const handleClick = ()=>{
    //u can add only one item by click the card
    
    const item: DessertItem = {
        name: props.name,
        pricePerItem: props.price,
        quantity: 1
    }
    cart.addItem(item)
}

// setting styles based on the
const computedStyles = computed(()=>{
    return cart.findItemIndex(props.name,props.price) === -1 ? "dessert_image_button_container_passive" : "dessert_image_button_container_active"
})
</script>


<template>
    <div :class="computedStyles" @click="handleClick">
        <DessertImage :image_src_obj="image_src_obj" :use_case="'profile'"/>
        <AddDessertToCart/>
    </div>
</template>