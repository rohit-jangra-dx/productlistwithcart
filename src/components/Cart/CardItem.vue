<script setup lang="ts">
import { cart, DessertItemInfo } from '@/store/cartStore';

const props = defineProps<DessertItemInfo>()

const handleDelete = ()=>{
    cart.deleteItem(props.name, props.pricePerItem)
}
</script>

<template>
    <div>
        <!-- main  card-->
        <div class=" flex justify-between items-center border-b-[1px] py-[1rem]">

            <div class=" flex flex-col gap-1">
                <!-- name -->
                <p class="dessert_name">{{ name }}</p>
                <!-- price_per_item, quantity and total price -->
                <div class="flex items-center  gap-2">
                    <p class="dessert_price mr-[3px]">{{ quantity }}x</p>
                    <p class="dessert_category">{{"@"+pricePerItem.toFixed(2) }}</p>
                    <p class="dessert_category font-semibold">{{"$"+totalPrice.toFixed(2) }}</p>
                </div>
            </div>
        <!-- delete button -->
        <div @click="handleDelete" role="button" class=" border-[2px] w-fit h-fit inline-block rounded-full p-[1px] border-Rose-300">
            <img src="/assets/images/icon-remove-item.svg" alt="delete button"/>
        </div>
        </div>
    </div>
</template>