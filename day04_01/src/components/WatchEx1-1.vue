<script setup>
import { ref, watch } from 'vue';

const num = ref(0);
watch(num, (cur, old) => {
  console.log(`변경 후: ${cur}, 변경 전: ${old} `);
});
</script>
<template>
  <h1>{{ num }}</h1>
  <button @click="num++">+</button>
</template>
