<template>
  <div class="border border-solid border-gray-400 rounded p-2 m-2 d-flex flex-column text-gray-700 justify-center align-center min-w-1 text-center">
    <slot />
  </div>
</template>

<style scoped>
    .box-item {
        @apply flex justify-center border-b border-solid border-gray-400 pb-2 mb-1;
    }
</style>