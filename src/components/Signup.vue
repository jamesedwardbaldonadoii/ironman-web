<template>
  <div class="w-full relative">
    <div class="relative h-full">
      <div class="flex mb-1">
        <AppInput
          class="mr-1 flex-grow-1"
          label="First name"
          required
          v-model="firstname"
          :error="error.firstname"
          placeholder="John"
          v-on:blur="validateFirstname"
        />
        <AppInput
          class="ml-1 flex-grow-1"
          label="Last name"
          required
          v-model="lastname"
          :error="error.lastname"
          placeholder="Doe"
          v-on:blur="validateLastname"
        />
      </div>
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
      <div class="my-2 text-center text-xs text-gray-700">
        By clicking join now, you agree to Nombre's <a class="text-teal-500" href="user-agreement">User agreement</a>, <a class="text-teal-500" href="privacy-policy">Privacy Policy</a> and Cookie <a class="text-teal-500" href="cookie-policy">Cookie Policy</a>
      </div>
      <AppButton
        class="w-2/3 m-auto block"
        label="Join Now"
        color="blue"
        size="sm"
        :onClick="signUp"
        :loading="isLoading"
      />
    </div>
    <div class="border-b border-solid border-gray-200 text-center relative mt-8 mb-5 w-full"><div class="login-or">or</div></div>

    <div class="flex flex-col justify-center items-center">
      <!-- Login with Facebook -->
      <div class="fb-login-button m-auto my-3 inline-block" data-width="184" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"></div>

      <!-- Login with Google -->
      <div id="my-signin2" class="m-auto my-3 inline-block"></div>
    </div>

    <div class="w-full flex-none text-center">
      Already a member?
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { regex } from '../config'
import { UsersService } from '../services/users.service'

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
      firstname: '',
      lastname: '',
      error: {
        password: null,
        email: null,
        firstname: null,
        lastname: null
      },
      isLoading: false,
      isDisabled: false
    }
  },
  methods: {
    validateFirstname () {
      if (this.error.firstname) this.error.firstname = null

      if (!this.firstname) {
        this.error.firstname = 'First name field cannot be empty.'
      }

      this.checkIfHasError()
    },
    validateLastname () {
      if (this.error.lastname) this.error.lastname = null

      if (!this.lastname) {
        this.error.lastname = 'Last name field cannot be empty.'
      }

      this.checkIfHasError()
    },
    validateEmail () {
      if (this.error.email) this.error.email = null

      if (!this.email) {
        this.error.email = 'Email field cannot be empty.'
      }

      if (!regex.EMAIL.test(this.email)) {
        this.error.email = 'Email is not a valid format.'
      }

      this.checkIfHasError()
    },
    validatePassword () {
      if (this.error.password) this.error.password = null

      if (!this.password) {
        this.error.password = 'Password field cannot be empty.'
      }

      this.checkIfHasError()
    },
    checkIfHasError () {
      this.isDisabled = !!(this.error.email || this.error.password || this.error.firstname || this.error.lastname)
    },
    validateSignup () {
      this.validateFirstname()
      this.validateLastname()
      this.validateEmail()
      this.validatePassword()
    },
    resetErrorform () {
      this.firstname = ''
      this.lastname = ''
      this.email = ''
      this.password = ''
      this.error = {
        password: null,
        email: null,
        firstname: null,
        lastname: null
      }
    },
    signUp () {
      if (!this.isDisabled) {
        this.validateSignup()
      }

      if (this.isDisabled) return

      this.isLoading = true

      UsersService.createUser({
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname
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
        .catch(() => {
          // this.error = error.message
          this.isLoading = false
        })
    }
  }
}
</script>
