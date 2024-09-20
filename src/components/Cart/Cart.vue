<script setup lang="ts">
 import { cart} from '@/store/cartStore';
</script>

<template>
    <div class=" bg-white w-[500px] h-[300px] border-red-300 border-[1px]">
        <p>Your Cart ({{ cart.len}})</p>
    </div>
</template>