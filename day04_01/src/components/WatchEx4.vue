<script setup>
import { reactive, ref, watch } from 'vue';

// 객체 자료형 속성 count에 값 0 을 할당하여 반응형 데이터로 만들어주세요.
const state = reactive({ count: 0 });

// 반응형 데이터를 콜백 함수 형태로 사용하여 인자로 watch()에게 넘겨주기
watch(
  () => state.count,
  (cur, old) => {
    console.log(cur, old);
  }
);
</script>
<template>
  <h1>ref : {{ state.count }} - reactive with callback watch</h1>
  <button @click="state.count++">+</button>
</template>
