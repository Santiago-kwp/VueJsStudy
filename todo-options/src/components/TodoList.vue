<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  props: {
    cptTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    updateTodo(id) {
      this.$emit('update-todo', id);
    },

    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
  },
};
</script>
<template>
  <div class="todo__list">
    <!-- 할 일 목록이 없을 때 -->
    <div v-if="cptTodo.length === 0" class="todo__item--no">
      <p>할일 목록이 없습니다.</p>
    </div>

    <div v-else>
      <div v-for="item in cptTodo" :key="item.id">
        <TodoItem
          :item="item"
          @update-todo="updateTodo"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
