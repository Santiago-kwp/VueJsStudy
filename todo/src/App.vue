<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  components: {
    // App.vue에 지역등록
    TodoHeader,
    TodoInput,
    TodoList,
  },

  data() {
    return {
      todos: [],
      current: "all",
    };
  },

  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), // todo id를 고유값으로 랜덤하게 저장
        msg: inputMsg, // todo String
        completed: false, // todo 완료 여부
      };
      this.todos.push(item);
      localStorage.setItem("todos", JSON.stringify(this.todos)); // 저장
    },
    updateTab(tab) {
      this.current = tab;
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((v) => v.id !== id);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    updateTodo(id) {
      this.todos = this.todos.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    editTodo(id, newMsg) {
      this.todos = this.todos.map((v) =>
        v.id === id ? { ...v, msg: newMsg } : v
      );
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },

  mounted() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  },

  computed: {
    computedTodo() {
      if (this.current === "all") {
        return this.todos;
      } else {
        return this.todos.filter((v) => v.completed);
      }
    },
  },
};
</script>

<template>
  <div class="todo">
    <!-- App.vue의 current 데이터를 TodoHeader 자식 컴포넌트의 current라는 props로 전달 -->
    <!-- @update-tab="updateTab" TodoHeader 자식 컴포넌트에서 update-tab이라는 이벤트가 발생하면, 부모 컴포넌트의 updateTab 메소드를 실행함 -->
    <TodoHeader :current="current" @update-tab="updateTab" />
    <!-- App.vue의 computedTodo 계산된 속성의 결과를 TodoList 자식 컴포넌트의 computed-todo라는 props로 전달 -->
    <!-- TodoList 자식 컴포넌트에서 delete-todo 이벤트가 발생하면, 부모 컴포넌트의 deleteTodo 메소드를 실행 -->
    <!-- TodoList 자식 컴포넌트에서 update-todo 이벤트가 발생하면, 부모 컴포넌트의 updateTodo 메소드를 실행 -->
    <TodoList
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @edit-todo="editTodo"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
