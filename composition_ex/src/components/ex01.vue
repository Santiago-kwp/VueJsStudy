<script setup>
import { ref, reactive, computed, watch } from 'vue';

const count = ref(0);

const doubleCount = computed(() => count.value * 2);
const countIncrement = () => {
  count.value++;
};

// watching a ref: 참조 (vuejs.org)
watch(count, (count, prevCount) => {
  console.log(`Count changed from ${prevCount} to ${count}`);
});
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="countIncrement">Increment</button>
  </div>
</template>
