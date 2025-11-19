<script setup>
import { ref } from 'vue';
import refEx2Child from './refEx2Child.vue';

const componentRef = ref(null); // 초기화

setTimeout(() => {
  console.log(componentRef.value.number);
  console.log(componentRef.value.doubleNumber);
}, 1000);
</script>

<template>
  <refEx2Child ref="componentRef" />
</template>
