<script setup lang="ts">
 const props =withDefaults( defineProps<{
    total_items: number 
 }>(), {total_items: 0})


</script>

<template>
    <div class=" bg-white w-[500px] h-[300px] border-red-300 border-[1px]">
        <p>Your Cart ({{ props.total_items }})</p>
    </div>
</template>