<template>
  <div class="login">
    <div class="main">
      <div class="header">Вход</div>
      <div class="content">
        <label for="email">E-mail</label>
        <input id="email" type="text" v-model="email" />

        <label for="password">password</label>
        <input id="password" type="password" v-model="password" @keyup.enter="makeLogin" />
      </div>
      <div class="buttons">
        <button @click="makeLogin">login</button>
      </div>

      <div class="error" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { AuthService } from "../services/auth.service";

export default {
  name: "Login",
  data() {
    return {
      email: "user@user.com",
      password: "123456",
      error: ""
    };
  },

  methods: {
    makeLogin() {
      AuthService.makeLogin({
        email: this.email,
        password: this.password
      })
        .then(response => {
          this.error = "";
        })
        .then(() => {
          this.$store
            .dispatch("user/getCurrent")
            .then(() => this.$router.push("profile"))
            .catch(error => console.log(error));
        })
        .catch(error => {
          console.log("error", error);
          this.$store.commit("toast/NEW", {
            type: "error",
            message: error.message
          });
          this.error =
            error.status === 404
              ? "User with same email not found"
              : error.message;
        });
    }
  }
};
</script>
