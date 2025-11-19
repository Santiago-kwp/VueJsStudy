<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
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
  <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
  <div class="todo__item" :class="{ 'todo__item--completed': item.completed }">
    <input
      type="checkbox"
      :id="`chk${item.id.toString()}`"
      :checked="item.completed"
      @click="updateTodo(item.id)"
    />
    <label
      :for="`chk${item.id.toString()}`"
      class="todo__checkbox-label"
    ></label>
    <span class="todo__item-text">{{ item.msg }}</span>

    <span
      class="material-symbols-outlined todo__delete-icon"
      @click="deleteTodo(item.id)"
    >
      delete
    </span>
  </div>
</template>
<style></style>
