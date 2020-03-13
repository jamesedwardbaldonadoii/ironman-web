<template>
  <button
    class="inline-flex items-center justify-center relative ripple-btn focus:outline-none border border-solid rounded transtion-background duration-700 bg-center active:duration-0 ripple-transition"
    :disabled="disabledBtn"
    :class="[btnColorClass, textColorClass, btnSizeClass, disabledBtn, {'rounded-full': circle}]"
    @click="onClick"
  >
    <AppLoader v-if="loading" :size="size" />
    <AppIcon
      v-if="icon"
      :name="icon"
      :color="textColorClass"
      :width="iconSizeClass.width"
      :height="iconSizeClass.height"
      :class="{'mr-1': label, 'invisible' : loading}"
    />
    <div :class="{'invisible' : loading}">{{label}}</div>
  </button>
</template>
  </button>
</template>

<script>
import AppIcon from "./Icons.vue";
import AppLoader from "./Loader.vue";

export default {
  name: "AppButton",

  components: {
    AppIcon,
    AppLoader
  },

  props: {
    color: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "md"
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    icon: {
      type: String
    },
    onClick: {
      type: Function,
      required: false,
      default: () => {}
    }
  },

  computed: {
    btnColorClass() {
      const colorExist = ["white", "green", "red", "blue", "gray"].includes(
        this.color
      );
      this.color = colorExist ? this.color : "white";

      if (this.disabled || this.loading) {
        if (this.color === "white") {
          return `bg-gray-300 border-gray-500 text-gray-500 cursor-not-allowed`;
        }

        return `bg-${this.color}-400 border-${this.color}-500 text-${this.color}-200 cursor-not-allowed`;
      }

      if (this.color === "white") {
        return `${this.color} bg-${this.color} border-gray-600`;
      }

      return `${this.color} bg-${this.color}-600 border-${this.color}-500`;
    },

    textColorClass() {
      if ((this.disabled || this.loading) && this.color === "white") {
        return `text-gray-500`;
      }

      if (this.color === "white") {
        return `text-gray-700`;
      }

      return `text-${this.color}-200`;
    },

    iconSizeClass() {
      const iconProps = {};
      let size;

      if (!this.icon) {
        return iconProps;
      }

      switch (this.size) {
        case "sm":
          size = "3";
          break;
        case "lg":
          size = "5";
          break;
        case "xl":
          size = "6";
          break;
        default:
          size = "4";
      }

      iconProps.width = "w-" + size;
      iconProps.height = "h-" + size;

      return iconProps;
    },

    btnSizeClass() {
      let size;

      switch (this.size) {
        case "sm":
          size = "p-2 text-sm";
          break;
        case "lg":
          size = "p-4 text-lg";
          break;
        case "xl":
          size = "p-5 text-xl";
          break;
        default:
          size = "p-3 text-base";
      }

      return size;
    },

    disabledBtn() {
      if (this.loading || this.disabled) {
        return true;
      }

      return false;
    }
  }
};
</script>

<style scoped lang="scss">
.ripple-transition {
  &.red {
    &:hover {
      background: #c53030 radial-gradient(circle, transparent 1%, #e53e3e 1%)
        center/15000%;
    }
    &:active {
      background-size: 100%;
    }
  }
  &.blue {
    &:hover {
      background: #2b6cb0 radial-gradient(circle, transparent 1%, #3182ce 1%)
        center/15000%;
    }
    &:active {
      background-size: 100%;
    }
  }
  &.gray {
    &:hover {
      background: #4a5568 radial-gradient(circle, transparent 1%, #718096 1%)
        center/15000%;
    }
    &:active {
      background-size: 100%;
    }
  }
  &.white {
    &:hover {
      background: #cbd5e0 radial-gradient(circle, transparent 1%, #a0aec0 1%)
        center/15000%;
    }
    &:active {
      background-size: 100%;
    }
  }
  &.green {
    &:hover {
      background: #2f855a radial-gradient(circle, transparent 1%, #38a169 1%)
        center/15000%;
    }
    &:active {
      background-size: 100%;
    }
  }
}
</style>
