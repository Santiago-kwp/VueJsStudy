<script setup>
import { ref, watch } from 'vue';

// 객체 자료형 속성 count에 값 0 을 할당하여 반응형 데이터로 만들어주세요.
const state = ref({ count: 0 });

// 아래의 경우 값은 증가하지만 watch는 반응하지 않음.
// watch(state, (cur, old) => {
//   console.log(cur, old);
// });

watch(
  state,
  (cur, old) => {
    console.log(cur, old);
  },
  { deep: true }
);
</script>
<template>
  <h1>ref : {{ state.count }} - ref with watch(deep:true)</h1>
  <button @click="state.count++">+</button>
</template>
