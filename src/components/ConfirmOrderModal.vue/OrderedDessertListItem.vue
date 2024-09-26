<script setup lang="ts">
import { computed } from 'vue';
import { DessertItemInfo } from '@/store/cartStore';
import { dessertData } from '@/store/dessertStore';

type OrderedDessertItem = DessertItemInfo & {
    thumbnail: string
}
const {name, pricePerItem, totalPrice, quantity} = defineProps<DessertItemInfo>()

console.log(dessertData.data)

const computedItemDetails = computed(()=>{
// we just need for the filepath for the item thumbnail
    const item = dessertData.findItem(name, pricePerItem)

    const OrderedItemInfo: OrderedDessertItem = {
        name: '',
        pricePerItem: 0,
        totalPrice: 0,
        quantity: 0,
        thumbnail: ''
    }
    if (item) {
        OrderedItemInfo.name = name
        OrderedItemInfo.pricePerItem = pricePerItem
        OrderedItemInfo.quantity = quantity
        OrderedItemInfo.totalPrice = totalPrice
        OrderedItemInfo.thumbnail = item.image.thumbnail
    }
     
    return OrderedItemInfo
})

</script>

<template>
    <div v-if="computedItemDetails.thumbnail !==''"
    class="flex justify-start items-center py-[.75rem] gap-[1rem] border-b-[1px] border-Rose-100"
    >
        <!-- thumbnail -->
        <img 
        class=" w-[50px] aspect-auto rounded-md"
        :src="computedItemDetails.thumbnail" 
        alt="dessert_thumbnail"/>     
         <!-- name quantity and price -->
        <div class=" flex flex-col items-start flex-1">
            <p class="dessert_name">{{ computedItemDetails.name }}</p>
            <!-- quantity and price -->
            <div class=" flex items-center">
                <p class="cart_item_quantity">{{ computedItemDetails.quantity }}x</p>
                <p class="dessert_category">{{"@"+computedItemDetails.pricePerItem.toFixed(2) }}</p>
            </div>
        </div>
        <!-- total Price -->
        <p class="dessert_name">${{ computedItemDetails.totalPrice.toFixed(2) }}</p>
    </div>
</template>