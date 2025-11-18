<script>
export default {
  data() {
    return {
      ErrString: {
        name: '이름은 두 글자 이상 입력해야 합니다.',
        email: '이메일 형식이 올바르지 않습니다.',
        password: '비밀번호는 8자 이상이어야 합니다.',
        passwordConfirm: '비밀번호가 일치하지 않습니다.',
      },
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },

  computed: {
    nameMsg() {
      if (!this.name) return '';
      return this.name.trim().length < 2
        ? this.ErrString.name
        : '사용 가능한 이름입니다.';
    },
    emailMsg() {
      if (!this.email) return '';
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email)
        ? '사용 가능한 이메일입니다.'
        : this.ErrString.email;
    },
    passwordMsg() {
      if (!this.password) return '';
      return this.password.length < 8
        ? this.ErrString.password
        : '사용 가능한 비밀번호입니다.';
    },
    passwordConfirmMsg() {
      if (!this.passwordConfirm) return '';
      return this.passwordConfirm === this.password
        ? '비밀번호가 일치합니다.'
        : this.ErrString.passwordConfirm;
    },
    isValid() {
      const nameOk = this.name.trim().length >= 2;
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
      const passwordOk = this.password.length >= 8;
      const confirmOk = this.password === this.passwordConfirm;
      return nameOk && emailOk && passwordOk && confirmOk;
    },
  },

  methods: {
    submitted() {
      alert(
        `이름 : ${this.name}\n이메일 : ${this.email}\n비밀번호 : ${this.password}\n비밀번호 확인 : ${this.passwordConfirm}`
      );
      this.name = '';
      this.email = '';
      this.password = '';
      this.passwordConfirm = '';
    },
  },
};
</script>

<template>
  <div id="container">
    <form id="registerForm">
      <label for="name">이름 : </label>
      <input type="text" v-model="name" />
      <br />
      <span>{{ nameMsg }}</span>
      <br />

      <label for="email"> 이메일 :</label>
      <input type="text" v-model="email" />
      <br />
      <span>{{ emailMsg }}</span>
      <br />

      <label for="password">비밀번호 :</label>
      <input type="password" v-model="password" />
      <br />
      <span>{{ passwordMsg }}</span>
      <br />

      <label for="passwordConfirm"> 비밀번호 확인:</label>
      <input type="password" v-model="passwordConfirm" />
      <br />
      <span>{{ passwordConfirmMsg }}</span>
      <br />

      <button type="button" :disabled="!isValid" @click="submitted">
        회원가입
      </button>
    </form>
  </div>
</template>

<style>
span {
  color: red;
}
</style>
