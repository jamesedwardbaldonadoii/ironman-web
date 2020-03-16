<template>
  <div class="h-screen w-full py-10">
    <div class="flex rounded border border-solid border-teal-200 shadow h-full w-full overflow-hidden justify-center">
      <div class="w--20 pr-5 h-full flex flex-col shrink-0 bg-white">
        <div class="flex flex-col justify-center items-center flex-grow">
          <div class="font-bold text-xl mx-auto mb-2">LOGIN</div>
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
  name: 'LoginPage',
  components: {
    Login
  }
}
</script>
