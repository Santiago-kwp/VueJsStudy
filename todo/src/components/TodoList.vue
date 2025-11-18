<script>
export default {
  data() {
    return {
      editingId: null,
      editMsg: "",
    };
  },
  // 부모 컴포넌트인 App.vue에서 전달받은 computedTodo 데이터를
  // TodoList 컴포넌트에서 props 옵션 속성으로 받는다.
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    updateTodo(id) {
      this.$emit("update-todo", id);
    },
    startEdit(item) {
      this.editingId = item.id;
      this.editMsg = item.msg; // 기존 메시지를 인풋에 채워줌
    },
    confirmEdit(id) {
      this.$emit("edit-todo", id, this.editMsg);
      this.editingId = null;
      this.editMsg = "";
    },
    cancelEdit() {
      this.editingId = null;
      this.editMsg = "";
    },
  },
};
</script>
<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
    <div
      v-for="item in computedTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.completed }"
    >
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
      <!-- 수정 모드일 때  -->
      <template v-if="editingId === item.id">
        <input v-model="editMsg" @keydown.enter="confirmEdit(item.id)" />
        <button @click="confirmEdit(item.id)">저장</button>
        <button @click="cancelEdit">취소</button>
      </template>

      <!-- 일반 모드일 때 -->
      <template v-else>
        <span class="todo__item-text">{{ item.msg }}</span>
        <span
          class="material-symbols-outlined todo__edit-icon"
          @click="startEdit(item)"
          >edit</span
        >
        <span
          class="material-symbols-outlined todo__delete-icon"
          @click="deleteTodo(item.id)"
          >delete</span
        >
      </template>
    </div>
    <!-- 할 일 목록이 없을 때 -->
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>
