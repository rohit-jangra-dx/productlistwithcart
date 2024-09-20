<script setup lang="ts">

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

</script>


<template>
    <div>
        <div v-if="props.use_case !== 'thumbnail'" class="image_container">
            <picture>
                <source media="(min-width: 1200px)" :srcset="image_src_obj.desktop">
                <source media="(min-width: 750px)" :srcset="image_src_obj.tablet">
                <source media="(min-width: 375px)" :srcset="image_src_obj.mobile">

                <img :src="image_src_obj.desktop" alt="dessert image">
            </picture>
        </div>
        <div v-else>
            <img :src="image_src_obj.thumbnail" alt="dessert thumbnail image"/>
        </div>
    </div>
</template>