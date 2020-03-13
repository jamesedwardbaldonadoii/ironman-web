<template>
  <div class="block">
    <label
      class="mb-2 block text-gray-700 text-sm font-bold"
      :class="{ 'text-red-500': error }"
      :for="labelId"
    >{{ label }}</label>
    <div
      class="flex border border-solid border-gray-200 shadow appearance-none border rounded w-full"
    >
      <div class="slot-before" v-if="$slots.before" :style="inputHeight">
        <slot name="before"></slot>
      </div>

      <div class="flex-1">
        <input
          class="py-2 px-3 w-full h-full active:outline-none focus:outline-none text-gray-700 leading-tight"
          :id="labelId"
          :type="inputType"
          :style="inputHeight"
          :value="value"
          :placeholder="placeholder"
          v-on="listeners"
        />

        <div class="slot-bottom" v-if="$slots.bottom">
          <slot name="bottom" />
        </div>
      </div>

      <div class="slot-after" v-if="$slots.after" :style="inputHeight">
        <slot name="after"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

  methods: {
    getRandomInt() {
      const min = 1;
      const max = 1000000000;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },

  computed: {
    labelId() {
      return `inputId${this.getRandomInt()}`;
    },
    inputType() {
      if (this.password) {
        return "password";
      }

      if (this.email) {
        return "email";
      }

      return "text";
    },
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  }
};
</script>
