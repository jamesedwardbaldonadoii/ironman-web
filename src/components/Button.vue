<template>
    <button class="p-2 border capitalize min-w-1 hover:text-white border-solid rounded"
      v-bind:class="{ 
        'bg-green-700 border-green-700 text-gray-200 hover:bg-green-900': cta,
        'bg-gray-700 border-gray-700 text-gray-200 hover:bg-gray-900': cancel,
      }"
    ><slot/></button>
</template>

<script>
  export default {
    props: {
      cta: {
        type: Boolean,
        default: false
      },
      cancel: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: null
      }
    }
  }
</script>