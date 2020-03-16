<template>
  <div class="h-screen w-full py-10">
    <div class="flex rounded border border-solid border-teal-200 shadow h-full w-full overflow-hidden">
      <div class="h-full flex-grow flex items-center gradient-bg relative">
        <div>
        </div>
      </div>
      <div class="w--20 pr-5 h-full flex flex-col shrink-0 bg-white">
        <div class="flex items-center flex-grow">
          <Login />
        </div>
        <div class="pb-10 w-full flex-none text-center">
          Don't have an account?
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login'

export default {
  name: 'IndexPage',
  components: {
    Login
  }
}
</script>
