<template>
  <div>
    <header>
    </header>
    <navbar/>
    <nuxt/>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/navbar.vue'

export default Vue.extend({
  components: {
    Navbar
  },
  data() {
    return {}
  },
})
</script>
