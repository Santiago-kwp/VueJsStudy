<script>
export default {
  beforeUnmount() {
    console.log('beforeUnmount-FirstChild');
  },
  unmounted() {
    console.log('unmouted-FirstChild');
  },
};
</script>
<template>
  <h1>First Child</h1>
</template>
