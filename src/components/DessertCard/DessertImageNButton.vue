<script setup lang="ts">
import DessertImage, { ImageObjType } from '@/components/DessertCard/DessertImage.vue';
import AddDessertToCart from '@/components/Buttons/AddDessertToCart.vue';
import { computed } from 'vue';

type DessertImageNButtonProps = {
    current_item_quantity: () => number
    increment: () => void
    decrement: () => void
    image_src_obj: ImageObjType
}

const {increment,decrement, current_item_quantity} = defineProps<DessertImageNButtonProps>()

const handleClick = ()=>{
    //u can add only one item by click the card
    if( current_item_quantity() > 0 ) {
        return
    } else {
        increment()
    }
}
 
const computedStyles = computed(()=>{
    return current_item_quantity() === 0 ? "dessert_image_button_container_passive" : "dessert_image_button_container_active"
})

</script>


<template>
    <div :class="computedStyles" @click="handleClick">
        <DessertImage :image_src_obj="image_src_obj" :use_case="'profile'"/>
        <AddDessertToCart :quantity_count="current_item_quantity()" :increment="increment" :decrement="decrement"/>
    </div>
</template>