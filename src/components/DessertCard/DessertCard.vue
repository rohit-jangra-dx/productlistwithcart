<script setup lang="ts">
import {ImageObjType} from "@/components/DessertCard/DessertImage.vue";
import DessertImageNButton from "@/components/DessertCard/DessertImageNButton.vue";

export type DessertCardProps= {
    name: string
    category: string
    price: number
    image_src_obj: ImageObjType 
}
const props = defineProps<DessertCardProps>()

</script>

<template>
    <div class="dessert_card">
        <DessertImageNButton v-bind="{...props}"/>
        <div>
            <p class="dessert_category">
                {{ props.category }}
            </p>
            <p class=" dessert_name">
                {{ props.name }}
            </p>    
            <p class="dessert_price">
                {{"$" + props.price.toFixed(2) }}
            </p>
        </div>
    </div>
</template>