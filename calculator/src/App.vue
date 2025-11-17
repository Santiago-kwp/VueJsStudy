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
      // 연산 흐름을 제어하는 함수로 분리
      // 저장된 숫자가 없는데 연산 기호를 클릭한 경우
      if (!this.cur && !this.prev) {
        alert('숫자를 먼저 입력하세요.');
        return;
      }

      // 사칙연산 기호를 연속으로 클릭한 경우
      if (this.operator !== '' && !this.cur) {
        alert('사칙연산 기호를 연달아 누를 수 없습니다.');
        return;
      }
      // 등호를 클릭해 결과를 노출한 후 다시 등호를 클릭한 경우
      if (n === '=' && this.prev === this.cur) {
        return;
      }

      this.cur = Number(this.cur);
      if (this.operator !== null) {
        // 사칙연산 기호이거나 등호이면 연산 수행
        this.prev = this.operationActions[this.operator](this.prev, this.cur);

        // 등호면 연산 결과 노출
        if (n === '=') {
          this.output = this.prev;
          this.operator = null;
          this.cur = this.prev; // 결과를 현재 값으로 유지(동기화)
        } else {
          // 이미 연산 기호가 있는데 n이 사칙연산 기호인 경우
          // 새 연산자로 교체하고 cur는 null로 리셋하여 연쇄 연산을 준비함.
          this.operator = n;
          this.cur = null;
        }
      } else {
        // 사칙연산 기호가 기존에 없었던 경우 첫 연산자 입력 및 prev에 cur를 옮김
        this.output = null;
        this.operator = n;
        this.prev = this.cur;
        this.cur = null;
      }
    },

    userInput(n) {
      // 사용자가 입력한 숫자를 저장하는 로직을 함수로 분리
      this.cur = this.cur === null ? n : (this.cur += n); // 처음 입력한 값이면 하나의 값, 이미 있으면 옆에 문자열 연결
      this.output = this.cur;
    },

    operation(event) {
      const n = event.currentTarget.value;
      if (n === 'C') {
        // 초기화
        this.clear();
      } else if (['+', '-', '*', '/', '='].includes(n)) {
        // 연산 흐름 제어 함수 호출
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
