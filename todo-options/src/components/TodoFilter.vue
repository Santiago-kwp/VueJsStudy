<script>
export default {
  props: {
    filter: {
      type: String,
      default() {
        return 'all';
      },
    },
  },
  emits: ['update-tab'],

  methods: {
    updateTab(tab) {
      this.$emit('update-tab', tab);
    },
  },
};
</script>
<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">
      <li
        :class="{ 'todo__tab--active': filter === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>

      <li
        :class="{ 'todo__tab--active': filter === 'active' }"
        @click="updateTab('active')"
      >
        진행중
      </li>

      <li
        :class="{ 'todo__tab--active': filter === 'done' }"
        @click="updateTab('done')"
      >
        완료
      </li>
    </ul>
  </div>
</template>
<style></style>
