<template>
  <div class="block">
    <label
      class="mb-2 block text-gray-700 text-sm font-bold"
      :class="{ 'text-red-500': hasError }"
      :for="labelId"
    >{{ label }}</label>

    <div
      class="flex items-center justify-center border border-solid shadow appearance-none border rounded w-full overflow-hidden"
      :class="[borderColor, {'border-red-500': hasError}]"
    >
      <div class="flex-none p-2 h-full border-r border-solid border-gray-200" v-if="$slots.before">
        <slot name="before"></slot>
      </div>

      <div class="flex-grow">
        <input
          class="p-3 w-full h-full active:outline-none focus:outline-none text-gray-700 leading-tight"
          :id="labelId"
          v-model="inputValue"
          :type="inputType"
          :placeholder="placeholder || 'Type here..'"
          v-on="listeners"
        />
      </div>

      <div class="flex-none p-2 h-full border-l border-solid border-gray-200" v-if="$slots.after">
        <slot name="after"></slot>
      </div>
    </div>
    <em class="h-3 mt-1 text-right block text-red-500 italic text-xs" v-html="errorMessage"></em>
  </div>
</template>

<script>
import { regex } from "../config";

export default {
  components: {
    regex
  },
  name: "AppInput",

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
    required: {
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
      borderColor: "border-gray-200",
      errorMsg: null,
      inputValue: null
    };
  },

  computed: {
    labelId() {
      return `inputId${this.getRandomInt()}`;
    },
    hasError() {
      return this.error || this.errorMsg;
    },
    errorMessage() {
      return typeof this.error === "boolean" ? this.errorMsg : this.error;
    },
    inputType() {
      if (this.password) return "password";

      if (this.email) return "email";

      return "text";
    },
    listeners() {
      return {
        ...this.$listeners,
        focus: e => {
          const value = e.target.value;
          this.borderColor = "border-blue-500";
        },
        input: e => this.$emit("input", e.target.value),
        blur: e => {
          const value = e.target.value;

          this.borderColor = "border-gray-200";

          if (this.required && !value) {
            return (this.errorMsg =
              (this.label
                ? this.label
                : `<span class="capitalize">${this.inputType}</span>`) +
              " field cannot be empty.");
          }

          if (this.email && !regex.EMAIL.test(value)) {
            return (this.errorMsg = "Invalid email address.");
          }

          return (this.errorMsg = null);
        }
      };
    }
  },

  methods: {
    getRandomInt() {
      const min = 1;
      const max = 1000000000;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },

  mounted() {
    this.$nextTick().then(() => {
      this.inputValue = this.value;
    });
  }
};
</script>
