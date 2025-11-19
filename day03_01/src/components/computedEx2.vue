<script setup>
import { computed, reactive, ref } from 'vue';

const refCount = ref(1);
const reactiveCount = reactive({ count: 1 });

// ref() 데이터를 활용 시 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2);

// reactive() 데이터는 value 속성이 필요 없음
const reactiveDoubleCount = computed(() => reactiveCount.count * 2);

// computed로 계산된 값읋 출력할 때는 value 를 사용한다.
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);

// 데이터에 반응성을 전달하기 => 다시 mount 해서 출력할 수 있게?
setTimeout(() => {
  refCount.value = 10;
  reactiveCount.count = 20;
}, 1000);
</script>

<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
