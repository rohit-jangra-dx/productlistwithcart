<script setup lang="ts">
import DessertImage,{ImageObjType} from "@/components/DessertCard/DessertImage.vue";

const props = defineProps<{
    name: string
    category: string
    price: number
    image_src_obj: ImageObjType 
}>()

</script>

<template>
    <div class="flex flex-col items-start gap-[1.7rem]">
        <DessertImage :use_case="'profile'" :image_src_obj="image_src_obj"/>
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