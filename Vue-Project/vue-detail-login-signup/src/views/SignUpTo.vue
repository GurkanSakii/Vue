<template>
  <form @submit.prevent="registerSubmit">
    <h3>Sign up</h3>
    <div class="first-row">
      <div>
        <input
          type="text"
          placeholder="Adınız"
          v-model.trim="firstName"
          :class="{ errorborder: error.name != null }"
        />
        <div v-if="error.name" class="error">{{ error.name }}</div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Soyadınız"
          v-model.trim="surName"
          :class="{ errorborder: error.surname != null }"
        />
        <div v-if="error.surname" class="error">{{ error.surname }}</div>
      </div>
    </div>
    <input
      type="email"
      placeholder="E-Posta Adresiniz"
      v-model.trim="email"
      :class="{ errorborder: error.email != null }"
    />
    <div v-if="error.email" class="error">{{ error.email }}</div>
    <input
      type="tel"
      placeholder="Telefon Numaranız"
      v-model.trim="phoneNumber"
      :class="{ errorborder: error.phone != null }"
    />
    <div v-if="error.phone" class="error">{{ error.phone }}</div>
    <div class="password-area">
      <input
        placeholder="Şifreniz"
        :type="signPasswordType"
        v-model.trim="password"
        @blur="passwordCompare"
        :class="{ errorborder: error.password != null }"
      />
      <div @click="showSignPassword">
        <img
          v-if="signPasswordType == 'password'"
          src="../../public/register-password-hide.svg"
        />
        <img v-else src="../../public/register-password-show.svg" />
      </div>
    </div>
    <div v-if="error.password" class="error">{{ error.password }}</div>
    <div class="password-area">
      <input
        placeholder="Şifre Onayı"
        :type="signRePasswordType"
        v-model.trim="rePassword"
        @blur="passwordCompare"
        :class="{ errorborder: error.repassword != null }"
      />
      <div @click="showSignRePassword">
        <img
          v-if="signRePasswordType == 'password'"
          src="../../public/register-password-hide.svg"
        />
        <img v-else src="../../public/register-password-show.svg" />
      </div>
    </div>
    <div v-if="error.repassword" class="error">{{ error.repassword }}</div>
    <div class="error">{{ error.comparepassword }}</div>
    <div class="agreement">
      <input type="checkbox" v-model="agreement" />
      <div>
        <span>Üyelik koşullarını</span
        ><span> ve kişisel verilerimin korunmasını kabul ediyorum.</span>
      </div>
    </div>
    <div v-if="error.agreements" class="error">{{ error.agreements }}</div>
    <div class="login-register">
      <button
        :class="{
          invalidsign:
            error.name != null ||
            error.surname != null ||
            error.email != null ||
            error.phone != null ||
            error.password != null ||
            error.repassword != null ||
            error.comparepassword != null ||
            error.agreements != null
        }"
      >
        ÜYE OL
      </button>
    </div>
  </form>
</template>

<script>
import { ref, watch } from "vue";
import {
  emailvalidator,
  namesurnameValidator,
  phoneValidator,
  passwordValidator,
  checkAgreement,
} from "../helpers/validator";

export default {
  setup() {
    const firstName = ref("");
    const surName = ref("");
    const email = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const rePassword = ref("");
    const agreement = ref(false);
    const error = ref({
      name: null,
      surname: null,
      email: null,
      phone: null,
      password: null,
      repassword: null,
      comparepassword: null,
      agreements: null,
    });
    const signPasswordType = ref("password");
    const signRePasswordType = ref("password");

    const showSignPassword = () => {
      signPasswordType.value =
        signPasswordType.value === "password" ? "text" : "password";
    };
    const showSignRePassword = () => {
      signRePasswordType.value =
        signRePasswordType.value === "password" ? "text" : "password";
    };

    watch(firstName, function (newValue) {
      const nameValidationError = namesurnameValidator(firstName.value);
      if (newValue === firstName.value) {
        if (nameValidationError) error.value.name = nameValidationError;
        else error.value.name = null;
      }
    });
    watch(surName, function (newValue) {
      const surnameValidationError = namesurnameValidator(surName.value);
      if (newValue === surName.value) {
        if (surnameValidationError)
          error.value.surname = surnameValidationError;
        else error.value.surname = null;
      }
    });
    watch(email, function (newValue) {
      const emailValidationError = emailvalidator(email.value);
      if (newValue === email.value) {
        if (emailValidationError) error.value.email = emailValidationError;
        else error.value.email = null;
      }
    });
    watch(phoneNumber, function (newValue) {
      const phoneValidationError = phoneValidator(phoneNumber.value);
      if (newValue === phoneNumber.value) {
        if (phoneValidationError) error.value.phone = phoneValidationError;
        else error.value.phone = null;
      }
    });
    watch(password, function (newValue) {
      const passwordValidationError = passwordValidator(password.value);
      if (newValue === password.value) {
        if (passwordValidationError)
          error.value.password = passwordValidationError;
        else error.value.password = null;
      }
    });
    watch(rePassword, function (newValue) {
      const repasswordValidationError = passwordValidator(rePassword.value);
      if (newValue === rePassword.value) {
        if (repasswordValidationError)
          error.value.repassword = repasswordValidationError;
        else error.value.repassword = null;
      }
    });
    const passwordCompare = () => {
      if (password.value != rePassword.value) {
        error.value.comparepassword = "Şifreler uyuşmuyor, tekrar deneyiniz";
      } else {
        error.value.comparepassword = null;
      }
    };
    watch(agreement, function (newValue) {
      const agreementValidationError = checkAgreement(agreement.value);
      if (newValue === agreement.value) {
        if (agreementValidationError)
          error.value.agreements = agreementValidationError;
        else error.value.agreements = null;
      }
    });

    const registerSubmit = () => {
      if (namesurnameValidator(firstName.value)) {
        error.value.name = namesurnameValidator(firstName.value);
      }
      if (namesurnameValidator(surName.value)) {
        error.value.surname = namesurnameValidator(surName.value);
      }
      if (phoneValidator(phoneNumber.value)) {
        error.value.phone = phoneValidator(phoneNumber.value);
      }

      if (emailvalidator(email.value)) {
        error.value.email = emailvalidator(email.value);
      }
      if (passwordValidator(rePassword.value)) {
        error.value.repassword = passwordValidator(rePassword.value);
      }
      if (passwordValidator(password.value)) {
        error.value.password = passwordValidator(password.value);
      }
      if (checkAgreement(agreement.value)) {
        error.value.agreements = checkAgreement(agreement.value);
      }
      if (password.value != rePassword.value) {
        error.value.comparepassword = "Şifreler uyuşmuyor, tekrar deneyiniz";
      } else {
        error.value.comparepassword = null;
        return true;
      }
    };

    return {
      firstName,
      surName,
      email,
      phoneNumber,
      error,
      showSignPassword,
      showSignRePassword,
      agreement,
      signPasswordType,
      signRePasswordType,
      password,
      rePassword,
      passwordCompare,
      registerSubmit,
    };
  },
};
</script>

<style scoped>
.first-row {
  display: flex;
}
.first-row > div {
  width: 48%;
  margin: 20px 20px 0 0;
}
.first-row > div:last-child {
  margin-right: 0;
}
.first-row input {
  margin-bottom: 0;
}
.agreement {
  display: flex;
  justify-content: center;
  align-items: center;
}
.agreement span {
  font-size: 13px;
}
.agreement div > span:first-child {
  color: #f2821a;
}
.agreement div > span:last-child {
  font-weight: 700;
}
.agreement input {
  margin: 0;
  padding: 0;
  width: 35px;
}
</style>
