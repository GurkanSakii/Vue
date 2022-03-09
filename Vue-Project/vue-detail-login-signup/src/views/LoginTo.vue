<template>
  <form @submit.prevent="formLoginSubmit">
    <h3>Login</h3>
    <input
      type="email"
      placeholder="Email Adresiniz"
      v-model.trim="email"
      :class="{ errorborder: error.email != null }"
    />
    <div v-if="error.email" class="error">{{ error.email }}</div>
    <div class="password-area">
      <input
        :type="passwordType"
        placeholder="Şifreniz"
        v-model.trim="password"
        :class="{ errorborder: error.pass != null }"
      />
      <div class="showpassword-area" @click="showPassword">
        <img
          v-if="passwordType == 'password'"
          src="../../public/register-password-hide.svg"
        />
        <img v-else src="../../public/register-password-show.svg" />
      </div>
    </div>
    <div v-if="error.pass" class="error">{{ error.pass }}</div>
    <div class="login-lastrow">
      <span>Şifremi Unuttum</span>
      <div class="rememberme">
        <input type="checkbox" />
        <span>Beni hatırla</span>
      </div>
    </div>
    <div class="login-register">
      <button>GİRİŞ YAP</button>
    </div>
  </form>
</template>

<script>
import { ref, watch } from "vue";
import { emailvalidator } from "../helpers/validator";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref({
      email: null,
      pass: null,
    });
    const passwordType = ref("password");

    const formLoginSubmit = () => {
      if (emailvalidator(email.value)) {
        error.value.email = emailvalidator(email.value);
      }
      if (password.value == "") {
        error.value.pass = "Lütfen şifre kısmını boş bırakmayın";
      } else {
        console.log(email.value, password.value);
        return true
      }
    };
    const showPassword = () => {
      passwordType.value =
        passwordType.value === "password" ? "text" : "password";
    };

    const emailCheck = watch(email, function (newValue) {
      if (newValue === email.value) {
        const emailValidationError = emailvalidator(email.value);
        if (emailValidationError) error.value.email = emailValidationError;
        else error.value.email = null;
      }
    });
    const passwordCheck = watch(password, function (newValue) {
      if (newValue === password.value) {
        if (password.value == "") {
          error.value.pass = "Lütfen şifre kısmını boş bırakmayın";
        } else {
          error.value.pass = null;
        }
      }
    });

    return {
      email,
      password,
      passwordType,
      error,
      showPassword,
      emailCheck,
      passwordCheck,
      formLoginSubmit,
    };
  },
};
</script>

<style scoped>
.login-lastrow {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.login-lastrow span:first-child {
  color: #f2821a;
}
.login-lastrow span:first-child:hover {
  cursor: pointer;
  text-decoration: underline;
}
.rememberme {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rememberme span {
  font-weight: 700;
}
.rememberme input {
  width: 35px;
  margin: 0;
  padding: 0;
}
</style>
