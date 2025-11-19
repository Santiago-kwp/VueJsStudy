<script setup>
// 부모로부터 전달받을 props 정의
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// 부모에게 이벤트를 보낼 emits 정의
const emit = defineEmits(['greet']);

// 부모에게 이벤트 전달
const sendGreeting = () => {
  emit('greet', `hello ${props.name}!`);
};
</script>

<template>
  <div>
    <button @click="sendGreeting">Send Greeting</button>
  </div>
</template>
