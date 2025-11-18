<script>
export default {
  data() {
    return {
      inputMsg: "", // 사용자 입력한 todo 데이터 저장
      isComposing: false, // 한글 조합 중인지 여부
    };
  },

  emits: ["addTodo"],

  methods: {
    addTodo() {
      if (this.isComposing) return; // 조합 중이면 무시
      if (!this.inputMsg.trim()) return;
      this.$emit("addTodo", this.inputMsg);
      this.inputMsg = "";
    },
    onCompositionStart() {
      this.isComposing = true;
    },
    onCompositionEnd() {
      this.isComposing = false;
    },
  },
};
</script>
<template>
  <div class="todo__input">
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
      @keyup.enter="addTodo"
      @compositionstart="onCompositionStart"
      @compositionend="onCompositionEnd"
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>
