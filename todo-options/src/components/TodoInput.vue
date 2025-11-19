<script>
export default {
  data() {
    return {
      newMsg: '',
    };
  },

  emits: ['addTodo'],

  methods: {
    addTodo() {
      if (!this.newMsg.trim()) {
        alert('공백은 Todo로 등록할 수 없습니다.');
        return;
      }
      // this.$emit('customEvent','전달할 데이터');
      // 'customEvent'는 부모 컴포넌트의 이벤트명 @customEvent="handleChildMessage"
      this.$emit('addTodo', this.newMsg);
      this.newMsg = '';
    },
  },
};
</script>
<template>
  <div class="todo__input">
    <input
      v-model="newMsg"
      @keyup.enter="addTodo"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>
<style></style>
