<script setup>
import { defineEmits } from 'vue';

// 자식컴포넌트에서는 부모컴포넌트에서 전달한 이벤트를 defineEmits()로 받는다.

// 자식컴포넌트에서 emit을 등록해서 자신이 발생시킬 수 있는 이벤트 이름을 명시한다.
const emit = defineEmits(['count-increment', 'state-count-increment']);

const increment = () => {
  emit('count-increment', 10, 20, 30);
};
</script>
<template>
  <button @click="increment">count 증가</button>
  <button @click="emit('state-count-increment', [50])">state count 증가</button>
</template>
