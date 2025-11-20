<script setup>
const props = defineProps({
  menus: {
    type: Array,
    default: [],
  },
  view: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <!-- <TheHeading /> -->
  <div class="menu">
    <button
      v-for="i in [0, 1, 2, 3]"
      :class="{ active: view === menus[i].key }"
      @click="view = menus[i].key"
    >
      {{ menus[i].label }}
    </button>
  </div>
</template>
