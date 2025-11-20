<script setup>
import { ref } from 'vue';
const inputRef = ref(null);
const inputValue = ref('');

const inputFocus = () => {
  // inputRef.value가 null이 아닐때만 실행
  inputRef.value?.focus();
};

// 입력 값을 alert로 띄우는 함수
const showAlert = () => {
  // v-model로 연결된 inputValue의 현재 값에 접근합니다.
  alert(`현재 입력된 내용: ${inputValue.value} `);
};
</script>
<template>
  <br />
  <input
    ref="inputRef"
    v-model="inputValue"
    type="text"
    placeholder="여기에 입력하세요."
  />
  <br />
  <button @click="inputFocus">입력창 이동</button>
  <button @click="showAlert">입력 내용 alert</button>
</template>
