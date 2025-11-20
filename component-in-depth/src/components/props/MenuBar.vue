<script setup>
const props = defineProps({
  menus: {
    type: Array,
    default: [],
  },
  view: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <!-- <TheHeading /> -->
  <div class="menu">
    <button
      v-for="menu in menus"
      :key="menu.key"
      :class="{ active: view === menu.key }"
      @click="$emit('update-view', menu.key)"
    >
      {{ menu.label }}
    </button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
.menu {
  margin: 0.3rem 0;
}
button {
  margin: 0.2rem;
  padding: 0.5rem;
}
.active {
  background-color: steelblue;
  color: aliceblue;
  border: 0;
  border-radius: 5px;
}
</style>
