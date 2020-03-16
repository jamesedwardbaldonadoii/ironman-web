<template>
  <div class="w-full relative">

    <div class="relative h-full">
      <!-- <img src="../assets/images/logo.svg" class="right-0 w-12 block m-auto" /> -->

      <div class="flex flex-col justify-center items-center">
        <!-- Login with Facebook -->
        <div class="fb-login-button m-auto my-3 inline-block" data-width="184" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"></div>

        <!-- Login with Google -->
        <div id="my-signin2" class="m-auto my-3 inline-block"></div>
      </div>

      <div class="border-b border-solid border-gray-200 text-center relative my-10"><div class="login-or">or</div></div>

      <div class="relative">
        <img src="../assets/images/login.svg" class="login-image w-40" />

        <AppInput
          label="Email"
          email
          required
          v-model="email"
          :error="error.email"
          placeholder="johndoe@email.com"
          v-on:blur="validateEmail"
        />
        <AppInput
          label="Password"
          password
          required
          v-model="password"
          :error="error.password"
          placeholder="**********"
          v-on:blur="validatePassword"
          @keyup.enter="makeLogin"
        />
        <div class="flex items-center justify-between mt-4">
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
          <AppButton
            class="w-1/3"
            label="Login"
            color="blue"
            size="sm"
            :onClick="makeLogin"
            :loading="isLoading"
          />
        </div>
      </div>
    </div>

    <!-- <div class="main">
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
    </div>-->
  </div>
</template>

<script>
import { regex } from '../config'
import { AuthService } from '../services/auth.service'

import AppInput from './Input'
import AppButton from './Button'

export default {
  name: 'Login',
  components: {
    AppInput,
    AppButton
  },
  data () {
    return {
      email: '',
      password: '',
      error: {
        password: null,
        email: null
      },
      isLoading: false,
      isDisabled: false
    }
  },
  methods: {
    validateEmail () {
      if (this.error.email) this.error.email = null

      if (!this.email) {
        this.error.email = 'Email field cannot be empty.'
      }

      if (!regex.EMAIL.test(this.email)) {
        this.error.email = 'Email is not a valid format.'
      }

      this.isDisabled = !!(this.error.email || this.error.password)
    },
    validatePassword () {
      if (this.error.password) this.error.password = null

      if (!this.password) {
        this.error.password = 'Password field cannot be empty.'
      }

      this.isDisabled = !!(this.error.email || this.error.password) || !this.email
    },
    validateLogin () {
      this.validateEmail()
      this.validatePassword()
    },
    resetErrorform () {
      this.email = null
      this.password = null
      this.error = {
        password: null,
        email: null
      }
    },
    makeLogin () {
      if (!this.isDisabled) {
        this.validateLogin()

        if (this.isDisabled) return
      }

      this.isLoading = true

      AuthService.makeLogin({
        email: this.email,
        password: this.password
      })
        .then(response => {
          this.error = {}
        })
        .then(() => {
          this.$store
            .dispatch('user/getCurrent')
            .then(() => this.$router.push('profile'))
            .catch(error => console.log(error))
          this.isLoading = false
        })
        .catch(error => {
          this.error = error.message
          this.isLoading = false
        })
    }
  }
}
</script>
