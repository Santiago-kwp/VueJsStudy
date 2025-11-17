<script>
export default {
  data() {
    return {
      output: null, // 출력칸에 표시되어 사용자에게 보여지는 값 - 양방향 데이터 바인딩 되어야 하는 값
      prev: null, // 이전에 입력된 값 또는 연산 결과
      cur: null, // 현재 입력된 값
      operator: null, // 연산자
      operationActions: {
        // 사칙연산을 수행하는 함수를 각각의 객체로 정의
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        '*': (n1, n2) => n1 * n2,
        '/': (n1, n2) => n1 / n2,
      },
    };
  },

  methods: {
    clear() {
      // 초기화
      this.output = null;
      this.prev = null;
      this.cur = null;
      this.operator = null;
    },

    calculate(n) {
      if (n === '=') {
        if (this.operator !== null && this.prev !== null && this.cur !== null) {
          this.output = this.operationActions[this.operator](
            Number(this.prev),
            Number(this.cur)
          ); // 연산을 수행하고,
          this.prev = this.output; // 연산 결과를 이전값에 저장
          this.operator = null;
          this.cur = null;
        } else {
          this.clear(); // 하나라도 없으면 연산 불가하여 일단 초기화
          return;
        }
      } else {
        if (this.operator !== null) {
          // 기존 연산자가 있는데 연산자가 또 온 경우 초기화
          this.clear();
          return;
        } else {
          this.operator = n; // 일단 연산자를 저장하고
          if (this.prev === null) {
            // 이전 결과 값이 없다면
            this.prev = this.cur; // 현재까지의 숫자를 이전 값에 저장하고 현재 값 초기화
            this.cur = null;
          }
        }
      }
    },

    userInput(n) {
      this.cur = this.cur === null ? n : (this.cur += n); // 처음 입력한 값이면 하나의 값, 이미 있으면 옆에 문자열 연결
    },

    operation(event) {
      const n = event.currentTarget.value;
      if (n === 'C') {
        // 초기화
        this.clear();
      } else if (['+', '-', '*', '/', '='].includes(n)) {
        // 연산
        this.calculate(n);
      } else {
        // 사용자가 입력한 숫자 저장 함수 호출
        this.userInput(n);
      }
    },
  },
};
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" readonly />
      <input type="button" class="clear" value="C" @click="operation" />
      <input type="button" class="operator" value="/" @click="operation" />
      <input type="button" value="1" @click="operation" />
      <input type="button" value="2" @click="operation" />
      <input type="button" value="3" @click="operation" />
      <input type="button" class="operator" value="*" @click="operation" />
      <input type="button" value="4" @click="operation" />
      <input type="button" value="5" @click="operation" />
      <input type="button" value="6" @click="operation" />
      <input type="button" class="operator" value="+" @click="operation" />
      <input type="button" value="7" @click="operation" />
      <input type="button" value="8" @click="operation" />
      <input type="button" value="9" @click="operation" />
      <input type="button" class="operator" value="-" @click="operation" />
      <input type="button" class="dot" value="." @click="operation" />
      <input type="button" value="0" @click="operation" />
      <input
        type="button"
        class="operator result"
        value="="
        @click="operation"
      />
    </form>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>
