<script setup>
import { reactive, watch } from 'vue';

// 객체 자료형 속성 count에 값 0 을 할당하여 반응형 데이터로 만들어주세요.
const state = reactive({ count: 0 });

watch(state, (cur, old) => {
  console.log(cur, old);
});
</script>
<template>
  <h1>ref : {{ state.count }} - reactive but state watch</h1>
  <button @click="state.count++">+</button>
</template>
