<script setup>
import ex02Child from './ex02Child.vue';
import { ref } from 'vue';

const childName = ref('Alice');

const handleGreeting = (message) => {
  console.log(message);
};
</script>

<template>
  <div><ex02Child :name="childName" @greet="handleGreeting" /></div>
</template>
