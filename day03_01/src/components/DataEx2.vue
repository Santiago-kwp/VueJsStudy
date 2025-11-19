<script setup>
import { ref } from 'vue';

// ref라는 함수 활용
const count = ref(0); // 기본 자료형 사용
const state = ref({ count: 0 });

console.log(count.value);
console.log(state.value.count);
</script>

<template>
  <h1>count: {{ count }}</h1>
  <h1>state: {{ state.count }}</h1>
</template>
