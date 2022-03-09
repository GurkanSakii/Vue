<template>
  <form @submit.prevent="registerSubmit">
    <h3>Sign up</h3>
    <div class="first-row">
      <div>
        <input type="text" placeholder="First name" v-model.trim="firstName" :class="{ errorborder: error.name != null }" />
        <div v-if="error.name" class="error">{{ error.name }}</div>
      </div>
      <div>
        <input type="text" placeholder="Last name" v-model.trim="surName" :class="{ errorborder: error.surname != null }" />
        <div v-if="error.surname" class="error">{{ error.surname }}</div>
      </div>
    </div>
    <input type="email" placeholder="Email" v-model.trim="email" :class="{ errorborder: error.email != null }" />
    <div v-if="error.email" class="error">{{ error.email }}</div>
    <input type="tel" placeholder="Telephone" v-model.trim="phoneNumber" :class="{ errorborder: error.phone != null }" />
    <div v-if="error.phone" class="error">{{ error.phone }}</div>
    <div class="password-area">
      <input placeholder="Password" :type="signPasswordType" v-model.trim="password" :class="{ errorborder: error.password != null }" />
      <div @click="showSignPassword">
        <img v-if="signPasswordType == 'password'" src="../../public/register-password-hide.svg" />
        <img v-else src="../../public/register-password-show.svg" />
      </div>
    </div>
    <div v-if="error.password" class="error">{{ error.password }}</div>
    <div class="password-area">
      <input placeholder="rePassword" :type="signRePasswordType" v-model.trim="rePassword" :class="{ errorborder: error.repassword != null }" />
      <div @click="showSignRePassword">
        <img v-if="signRePasswordType == 'password'" src="../../public/register-password-hide.svg" />
        <img v-else src="../../public/register-password-show.svg" />
      </div>
    </div>
    <div v-if="error.repassword" class="error">{{ error.repassword }}</div>
    <div class="agreement">
      <input type="checkbox" />
      <div><span>Üyelik koşullarını</span><span> ve kişisel verilerimin korunmasını kabul ediyorum.</span></div>
    </div>
    <div class="login-register">
      <button :disabled="error">ÜYE OL</button>
    </div>
  </form>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const firstName = ref("");
    const surName = ref("");
    const email = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const rePassword = ref("");
    const error = ref({
      name: null,
      surname: null,
      email: null,
      phone: null,
      password: null,
      repassword: null,
    });
    const signPasswordType = ref("password");
    const signRePasswordType = ref("password");

    const showSignPassword = () => {
      signPasswordType.value = signPasswordType.value === "password" ? "text" : "password";
    };
    const showSignRePassword = () => {
      signRePasswordType.value = signRePasswordType.value === "password" ? "text" : "password";
    };

    const checkfirstName = watch(firstName, function (newValue) {
      if (newValue === firstName.value) {
        if (!firstName.value.match(/^[a-zA-Z0-9]{3,24}$/)) {
          error.value.name = "special karakter girmeyin - 3 ve 24 arası yazın firstname";
        } else {
          error.value.name = null;
        }
      }
    });
    const checksurName = watch(surName, function (newValue) {
      if (newValue === surName.value) {
        if (!surName.value.match(/^[a-zA-Z0-9]{3,24}$/)) {
          error.value.surname = "special karakter girmeyin - 3 ve 24 arası yazın surname";
        } else {
          error.value.surname = null;
        }
      }
    });
    const checkEmail = watch(email, function (newValue) {
      if (newValue === email.value) {
        if (!email.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          error.value.email = "geçerli bir email giriniz";
        } else {
          error.value.email = null;
        }
      }
    });
    const checkPhone = watch(phoneNumber, function (newValue) {
      if (newValue === phoneNumber.value) {
        if (!phoneNumber.value.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)) {
          error.value.phone = "geçerli bir telefon numarası giriniz";
        } else {
          error.value.phone = null;
        }
      }
    });
    watch(password, function (newValue) {
      if (newValue === password.value) {
        if (!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
          error.value.password = "Minimum eight characters, at least one letter, one number and one special character:";
        } else {
          error.value.password = null;
        }
      }
    });
    watch(rePassword, function (newValue) {
      if (newValue === rePassword.value) {
        if (!rePassword.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
          error.value.repassword = "Minimum eight characters, at least one letter, one number and one special character:";
        } else {
          error.value.repassword = null;
        }
      }
    });
    const passwordCompare = () => {
      if (password.value != rePassword.value) {
        error.value = "sifre uyumlu degil";
      } else {
        error.value = null;
      }
    };

    const registerSubmit = () => {
      if (!checkfirstName || !checksurName || !checkEmail || !checkPhone) {
        error.value = "bos bırakma aslan";
      } else {
        error.value = "napıyn";
      }
    };

    return {
      firstName,
      surName,
      email,
      error,
      phoneNumber,
      checkfirstName,
      checksurName,
      checkEmail,
      checkPhone,
      showSignPassword,
      showSignRePassword,
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
.first-row input{
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
.agreement input {
  margin: 0;
  padding: 0;
  width: 35px;
}
</style>
