<script setup>
import { ref, watch } from 'vue';

const refData = ref(0);

watch(refData, (currentValue, prevValue) => {
  console.log(currentValue, prevValue);
});

const increment = () => {
  refData.value++;
};
</script>
<template>
  <h1>ref: {{ refData }} - ref with default watch</h1>
  <button @click="increment">+</button>
</template>
