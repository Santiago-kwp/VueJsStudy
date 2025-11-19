<script setup>
import { reactive } from 'vue';

// ref라는 함수 활용
const state = reactive(0);

console.log(state.value);
setTimeout(() => {
  state.value++;
}, 1000);
</script>

<template>
  <h1>state: {{ state }}</h1>
</template>
