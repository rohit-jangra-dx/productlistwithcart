<script setup lang="ts">
import { computed } from 'vue';

export type ImageObjType = {
        thumbnail: string
        mobile: string
        tablet: string;
        desktop: string;
    }
    const props = defineProps<{
        image_src_obj: ImageObjType
        use_case: "thumbnail" | "profile"
    }>()

    // mapping the actual path for the images to load
    const getImageUrl = (imagePath: string) => {
        return new URL(imagePath, import.meta.url).href
    }

    const computedImageObj = computed(()=> {
        const imageObjWithUrls: ImageObjType = {...props.image_src_obj}
        
        for (const key in imageObjWithUrls) {
            if (Object.prototype.hasOwnProperty.call(imageObjWithUrls, key)) {
                imageObjWithUrls[key as keyof ImageObjType] = getImageUrl(imageObjWithUrls[key as keyof ImageObjType])
            }
        }
        
        return imageObjWithUrls
    })
</script>


<template>
    <div>
        <div v-if="props.use_case !== 'thumbnail'" class="image_container">
            <picture>
                <source media="(min-width: 1200px)" :srcset="computedImageObj.desktop">
                <source media="(min-width: 750px)" :srcset="computedImageObj.tablet">
                <source media="(min-width: 375px)" :srcset="computedImageObj.mobile">

                <img :src="computedImageObj.desktop" alt="dessert image">
            </picture>
        </div>
        <div v-else>
            <img :src="computedImageObj.thumbnail" alt="dessert thumbnail image"/>
        </div>
    </div>
</template>