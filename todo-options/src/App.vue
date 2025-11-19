<script>
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';

export default {
  components: {
    TodoFilter,
    TodoInput,
    TodoList,
  },

  data() {
    return {
      todos: [],

      filter: 'all', // all | active | done
    };
  },

  methods: {
    addTodo(newMsg) {
      const item = {
        // item을 object로 정의
        id: Math.random(), // todo id를 고유값으로 랜덤하게 저장
        msg: newMsg,
        completed: false,
      };
      this.todos.push(item); //
    },

    updateTab(tab) {
      // 필터링 탭 정의
      this.filter = tab;
    },

    updateTodo(id) {
      this.todos = this.todos.filter((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((v) => v.id !== id);
    },
  },

  computed: {
    computedTodo() {
      switch (this.filter) {
        case 'all':
          return this.todos;
        case 'active':
          return this.todos.filter((v) => !v.completed);
        case 'done':
          return this.todos.filter((v) => v.completed);
      }
    },
  },
};
</script>
<template>
  <div class="todo">
    <!-- 'message'라는 이름으로 'hello from parent' 문자열 전달 -->
    <!-- <ChildComponent :message="parentData" :count="10" /> -->
    <TodoFilter :filter="filter" @update-tab="updateTab" />
    <!-- computedTodo 데이터를 TodoList 컴포넌트에 cptTodo이름으로 전달 -->
    <TodoList
      :cptTodo="computedTodo"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
<style></style>
