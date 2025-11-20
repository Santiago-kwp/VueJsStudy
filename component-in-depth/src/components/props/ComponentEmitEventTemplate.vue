<script setup>
// Composition API의 ref 불러오기
import { ref, reactive, computed } from "vue";
// 자식 컴포넌트 import
import ComponentEmitEventTemplateChild from "./ComponentEmitEventTemplateChild.vue";

// 부모가 외부(App.vue 등)로부터 받을 props 정의
// viewTitle: 화면에 보여줄 제목(문자열)
defineProps({
  viewTitle: String,
});

// 부모가 관리하는 반응형 상태
// message: 자식에서 이벤트가 발생했을 때 화면에 보여줄 문장
const message = ref("");

const messages = reactive([]);

const isActive = ref(false);

const isError = ref(false); // 에러 발생 여부 상태
const errorMsg = ref(""); // 에러 메시지 내용

const userInfo = reactive({
  name: "신세계",
  age: 20,
  major: "Computer Science",
});

const emitObj = ref(null);

// 자식이 'greetingEvent' (또는 greeting-event) 를 emit 했을 때 실행할 함수
// => 인자 없이, 고정된 문장을 message에 세팅
const greet = () => {
  message.value = "지금 이 순간도 너의 성공 이야기의 한 페이지야~";
};

// 자식이 'greetingArgEvent' 를 emit 하면서 값을 같이 넘겨줄 때 실행할 함수
// greet 매개변수: 자식이 올려준 문장 (payload, 데이터)
const greetArg = (greet) => {
  // 에러 상태 토글
  isError.value = false;
  errorMsg.value = "";
  // 부모의 message를 자식이 넘겨준 내용으로 갱신
  message.value = greet;

  // 부모 화면에 리스트로 표시
  messages.push(greet);
};

const welcomeEvent = (name) => {
  alert(`${name}님 환영합니다!`);
};

const multiEvent = (obj) => {
  emitObj.value = obj;
};

const readableTimestamp = computed(() => {
  if (emitObj.value && emitObj.value.timestamp) {
    const date = new Date(emitObj.value.timestamp);

    return date.toLocaleString();
  }
  return "N/A";
});

const errorEvent = () => {
  isError.value = true;
  errorMsg.value = "입력값이 비어 있습니다!";
};
</script>

<template>
  <div>
    <!-- 부모가 받은 props 출력 -->
    <h1>{{ viewTitle }}</h1>

    <!--
          자식 컴포넌트를 사용하면서
          - v-on:greeting-event="greet"
          - @greeting-arg-event="greetArg"

          로 자식이 emit하는 이벤트를 "이름으로 매핑"해서 처리한다.
          (중요: 실제 코드는 greetingEvent vs greeting-event 이름이 달라서
           이벤트가 안 잡힐 수 있으므로  둘 다 kebab-case(소문자-하이픈)로 통일)
        -->
    <ComponentEmitEventTemplateChild
      v-on:greeting-event="greet"
      @greeting-arg-event="greetArg"
      @error-event="errorEvent"
      color="pink"
      @welcome-event="welcomeEvent"
      :isActive
      @toggle-event="isActive = !isActive"
      :userInfo
      @multi-event="multiEvent"
      defaultMsg="안녕하세요!!"
    />

    <!-- 자식 이벤트에 의해 바뀐 message 출력 -->
    <h3>{{ message }}</h3>
    <h3 v-if="isError" style="color: red">{{ errorMsg }}</h3>

    <h2>문제3 - 인사해요 리스트로 출력하기</h2>
    <div v-for="msg in messages">- {{ msg }}</div>

    <h2>문제7 - 객체를 emit으로 받아서 출력하기</h2>
    <ul v-if="emitObj">
      <li>메시지 : [{{ emitObj.msg }}]</li>
      <li>길이 : [{{ emitObj.length }}]</li>
      <li>전송시간 : [{{ readableTimestamp }}]</li>
    </ul>
  </div>
</template>

<style scoped>
/* 현재는 스타일 없음 */
</style>
