<script>
export default {
  data() {
    return {
      name: '', // 사용자 이름
      email: '', // email
      password: '', // password
      passwordConfirm: '', // password confirmation
      notMatchMsg: '', // 비밀번호 일치 여부 메시지
    };
  },

  methods: {
    register() {
      alert(
        `이름 : ${this.name}\n이메일 : ${this.email}\n비밀번호 : ${this.password}`
      );
      this.name = '';
      this.email = '';
      this.password = '';
      this.passwordConfirm = '';
      this.notMatchMsg = '';
    },
  },

  watch: {
    // 두 값 동시에 감시
    passwordConfirmWatcher: {
      handler([newPassword, newConfirm]) {
        if (newPassword && newConfirm) {
          this.notMatchMsg =
            newPassword !== newConfirm ? '비밀번호가 일치하지 않습니다.' : '';
        } else {
          this.notMatchMsg = '';
        }
      },
      immediate: true,
    },
  },

  computed: {
    passwordConfirmWatcher() {
      return [this.password, this.passwordConfirm];
    },
    isValid() {
      const isValidName = this.name.trim().length >= 2;
      const isValidEmail = this.email.includes('@');
      const isValidPassword = this.password.length >= 8;
      const isPasswordConfirm = this.password === this.passwordConfirm;

      return (
        isValidName && isValidEmail && isValidPassword && isPasswordConfirm
      );
    },
  },
};
</script>
<template>
  <div id="container">
    <form id="registerForm">
      <label for="name">이름 : </label>
      <input type="text" v-model="name" />
      <p v-if="name.length > 0 && name.length < 2" style="color: red">
        이름은 두 글자 이상 입력해야 합니다.
      </p>
      <br />

      <label for="email"> 이메일 :</label>
      <input type="text" v-model="email" />
      <p v-if="email.length > 0 && !email.includes('@')" style="color: red">
        올바른 이메일 형식이 아닙니다.
      </p>
      <br />

      <label for="password">비밀번호 :</label>
      <input type="password" v-model="password" />
      <p v-if="password.length > 0 && password.length < 8" style="color: red">
        비밀번호는 8글자 이상이어야 합니다.
      </p>
      <br />

      <label for="passwordConfirm"> 비밀번호 확인:</label>
      <input type="password" v-model="passwordConfirm" />
      <p
        v-if="passwordConfirm.length > 0 && password != passwordConfirm"
        style="color: red"
      >
        비밀번호가 일치하지 않습니다.
      </p>
      <br />

      <button v-if="isValid" type="button" @click="register">회원가입</button>
    </form>
  </div>
</template>
<style></style>
