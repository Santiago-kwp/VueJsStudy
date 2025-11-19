<script setup>
import { reactive } from 'vue';

const item1 = reactice({
  price: 2800,
  count: 20,
});
const item2 = reactive({
  price: 3900,
  count: 5,
});

const cart = reactive([item1, item2]);
</script>
