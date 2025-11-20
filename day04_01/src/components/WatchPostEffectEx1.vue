<script setup>
import { ref, watch, watchEffect, watchPostEffect } from 'vue';
const message = ref('');

const messageP = ref(null);

// flush : post 지정안함 => DOM 이 갱신되기 전에 콜백함수가 수행된다.
watch(message, () => {
  if (message.value) {
    console.log(`watch: ${messageP.value.innerText}`);
  }
});

watchEffect(
  () => {
    if (message.value) {
      console.log(`watchEffect: ${messageP.value.innerText}`);
    }
  },
  { flush: 'post' }
);

watchPostEffect(() => {
  if (message.value) {
    console.log(`watchPostEffect: ${messageP.value.innerText}`);
  }
});
</script>

<template>
  <div>
    <input v-model="message" placeholder="메시지를 입력하세요" type="text" />
    <p ref="messageP">{{ message }}</p>
  </div>
</template>
