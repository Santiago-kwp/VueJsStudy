<script>
export default {
  // 데이터란 컴포넌트 전반에 걸쳐서 사용할 값
  // data: function (){
  //  return {};
  // },

  data: function () {
    return {
      // message: '<h1>Hello VueJs!</h1>',
      // message: 'Hello, Vue!!',
      // className: 'red-color',
      // visible: true,
      // unvisible: false,
      condition: true,

      names: ['ssg1', 'ssg2', 'ssg3'],

      user: {
        name: 'John',
        age: 20,
        gender: 'male',
      },
    };
  },

  methods: {
    clickHandler(event) {
      console.log(event);
      // alert('click');
    },
  },
};
</script>
<template>
  <!-- <div v-html="message"></div>
  <div v-text="message"></div>
  <div v-pre>{{ message }}</div>

  <h1 v-bind:class="className">안녕하세요.</h1>
  <h1 :class="className">안녕하세요.</h1>
  <p v-if="visible">이 요소는 보입니다.</p>
  <p v-if="unvisible">난 안보이지.</p> -->
  <p v-if="condition === 'A'">A</p>
  <p v-if="condition !== 'B'">B</p>
  <p v-if="condition === 'C'">C</p>

  <p v-show="condition">v-show 조건이 참</p>
  <p v-show="!condition">v-show 조건이 거짓</p>

  <ul>
    <li v-for="name in names">value: {{ name }}</li>
  </ul>
  <ul>
    <li v-for="(name, key, index) in names" :key="index">
      index : {{ index }}, value: {{ name }}, key: {{ key }}
    </li>
  </ul>

  <h1>user 데이터 출력</h1>
  <ul>
    <li v-for="(value, key, index) in user" :key="index">
      key: {{ key }}, value: {{ value }}, index: {{ index }}
    </li>
  </ul>

  <button type="button" v-on:dblclick="clickHandler">클릭!</button>
  <button type="button" @click="clickHandler($event)">클릭!</button>
  <button type="button" @click="($event) => clickHandler($event, message)">
    클릭?!
  </button>
</template>
<style>
.red-color {
  color: red;
}
</style>
