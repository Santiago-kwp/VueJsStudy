<script setup>
import { ref } from "vue";
const inputRef = ref("");

const inputFocus = () => {
  inputRef.value.focus();
};
</script>
<template>
  <br />
  <input ref="inputRef" type="text" placeholder="여기에 입력하세요." />
  <br />
  <button @click="inputFocus">입력창 이동</button>
</template>
