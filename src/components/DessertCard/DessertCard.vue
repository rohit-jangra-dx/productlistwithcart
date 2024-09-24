<script setup lang="ts">
import {ImageObjType} from "@/components/DessertCard/DessertImage.vue";
import DessertImageNButton from "@/components/DessertCard/DessertImageNButton.vue";
import { cart, DessertItem } from "@/store/cartStore";
import { watch } from "vue";

watch(()=> cart.items, (newItems, oldItems)=> {
    console.log("Items changed from :", oldItems, "to: ",newItems)
})

export type DessertCard= {
    name: string
    category: string
    price: number
    image_src_obj: ImageObjType 
}
const {name, price} = defineProps<DessertCard>()

// it adds the item if its not available otherwise it updates the current item quantity by 1
const increment = () =>{

    const current_item_quantity = find_current_item_quantity()

    const item: DessertItem = {
        name: name,
        pricePerItem: price,
        quantity: current_item_quantity + 1
    }
    if (current_item_quantity === 0) {
        cart.addItem(item)
    } else {
        cart.updateItem(item,name,price)
    }
}

// it removes the item if item quantity is 1 (decrementing means 0) other wise current item quantity is removed by 1
const decrement = () => {

    const current_item_quantity = find_current_item_quantity()

    if (current_item_quantity === 1) {
        cart.deleteItem(name,price)
        cart.items = [...cart.items]
        return 
    }


    const item: DessertItem = {
        name: name,
        pricePerItem: price,
        quantity: current_item_quantity - 1
    }

    cart.updateItem(item, name, price)
}

const find_current_item_quantity = () => {
    const item_index = cart.findItemIndex(name, price)
    
    if (item_index === -1) {
        return 0
    }
    
    return cart.items[item_index].quantity
}
</script>

<template>
    <div class="dessert_card">
        <DessertImageNButton 
        :increment="increment" 
        :decrement="decrement" 
        :current_item_quantity="find_current_item_quantity"
        :image_src_obj="image_src_obj"
        />
        <div>
            <p class="dessert_category">
                {{ category }}
            </p>
            <p class=" dessert_name">
                {{ name }}
            </p>    
            <p class="dessert_price">
                {{"$" + price.toFixed(2) }}
            </p>
        </div>
    </div>
</template>