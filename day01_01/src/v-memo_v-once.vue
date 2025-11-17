<script>
export default {
  data() {
    return {
      name: 'ssg',
      age: 20,
      gender: 'male',
    };
  },

  methods: {
    onKeyupHandler(event) {
      if (event.keyCode === 13) {
        console.log('Enter key');
      }
    },
    increment() {
      this.number++;
    },
  },
};
</script>
<template>
  <input type="text" @keyup.enter="onKeyupHandler" />
  <!-- 한번만 렌더링 하겠다. -->
  <h1 v-once>{{ number }}</h1>
  <button type="button" @click="increment">increment</button>
  <!-- 저장하겠다.  -->
  <div v-memo="[name, gender]">
    <p>이름 : {{ name }}</p>
    <p>성별 : {{ gender }}</p>
    <p>나이 : {{ age }}</p>
  </div>
  <button @click="name = 'ssg1'">이름변경</button>
  <button @click="gender = 'female'">성별 변경</button>
  <button @click="age = 30">나이변경</button>
</template>
