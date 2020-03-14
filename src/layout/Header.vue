<template>
  <div class="header wrapper">HEADER</div>
</template>

<script>
import { AuthService } from '../services/auth.service'

export default {
  name: 'Header',
  methods: {
    logout () {
      AuthService.makeLogout()
    }
  }
}
</script>
