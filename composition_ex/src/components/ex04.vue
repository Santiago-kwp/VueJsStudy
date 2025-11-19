<script setup>
import { reactive, computed } from "vue";

const item1 = reactive({
  price: 2800,
  count: 20,
});
const item2 = reactive({
  price: 3900,
  count: 5,
});

const cart = reactive([item1, item2]);

const totalPrice = computed(() => {
  return cart.reduce((sum, item) => sum + item.price * item.count, 0);
});
</script>
<template>
  <br />
  <label>아이템 1 가격: <input type="number" v-model="item1.price" /></label>
  <label>아이템 1 수량: <input type="number" v-model="item1.count" /></label>
  <br />
  <label>아이템 2 가격: <input type="number" v-model="item2.price" /></label>
  <label>아이템 2 수량: <input type="number" v-model="item2.count" /></label>
  <br />
  <p>장바구니 총합 : {{ totalPrice }}</p>
</template>
