<template>
  <div class="app-input">
    <label :class="{ 'text-red-500': hasError }" :for="labelId">{{ label }}</label>

    <div class="container" :class="[borderColor, disabledClass, {'border-red-500': hasError}]">
      <div class="slot border-r" v-if="$slots.before">
        <slot name="before"></slot>
      </div>

      <div class="flex-grow">
        <input
          class="p-3 w-full h-full active:outline-none focus:outline-none leading-tight"
          :class="disabledClass"
          :id="labelId"
          v-model="inputValue"
          :type="inputType"
          :disabled="disabled"
          :placeholder="placeholder || 'Type here..'"
          v-on="listeners"
        />
      </div>

      <div class="slot border-l" v-if="$slots.after">
        <slot name="after"></slot>
      </div>
    </div>
    <em class="text-error" v-html="errorMessage"></em>
  </div>
</template>

<script>

export default {
  name: 'AppInput',

  props: {
    label: {
      type: String
    },
    password: {
      type: Boolean,
      default: false
    },
    email: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      required: true
    },
    placeholder: {
      type: String
    },
    error: {
      type: [String, Boolean],
      default: false
    }
  },

  data: () => {
    return {
      borderColor: 'border-gray-200',
      errorMsg: null,
      inputValue: null
    }
  },

  computed: {
    labelId () {
      return `inputId${this.getRandomInt()}`
    },
    hasError () {
      return this.error
    },
    errorMessage () {
      return typeof this.error === 'boolean' ? this.errorMsg : this.error
    },
    inputType () {
      if (this.password) return 'password'

      if (this.email) return 'email'

      return 'text'
    },
    listeners () {
      return {
        ...this.$listeners,
        focus: e => {
          this.$emit('focus', e)
          this.borderColor = 'border-blue-500'
        },
        input: e => this.$emit('input', e.target.value),
        blur: e => {
          this.$emit('blur', e)
          this.borderColor = 'border-gray-200'
        }
      }
    },
    disabledClass () {
      if (this.disabled) return 'app-disabled'

      return 'text-gray-700'
    }
  },

  methods: {
    getRandomInt () {
      const min = 1
      const max = 1000000000
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  },

  mounted () {
    this.$nextTick().then(() => {
      this.inputValue = this.value
    })
  }
}
</script>
