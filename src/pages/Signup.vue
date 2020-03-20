<template>
  <div class="py-10 flex flex-col align-items-center bg-teal-500 overflow-auto">
    <div class="w--30 m-auto rounded shadow bg-white overflow-hidden justify-center">
      <div class="p-10 flex flex-col justify-center items-center flex-grow">
        <div class="font-bold text-center">
          Start building yourself <span class="text-teal-500">UP</span>!
        </div>

        <img src="../assets/images/welcome_cats.svg" class="w-40 mt-10" />

        <Logo class="mt-1 mb-10" />

        <Signup />
      </div>
    </div>
    <div class="pb-4 w-full flex-none text-teal-700 text-center">
      Nombre © 2019 - {{currentYear}}
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import Signup from '../components/Signup'

export default {
  name: 'SignupPage',
  components: {
    Logo,
    Signup
  },
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
