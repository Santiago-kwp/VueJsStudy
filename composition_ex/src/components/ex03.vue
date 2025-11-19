<script setup>
import { ref, computed } from 'vue';

const searchText = ref('');

const warningMessage = computed(() =>
  searchText.value.length > 10 ? '10자를 초과했습니다.' : ''
);
</script>

<template>
  <input v-model="searchText" placeholder="글자를 입력하세요." />
  <p style="color: red">{{ warningMessage }}</p>
</template>
