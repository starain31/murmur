<template>
  <div>
    <header>
      <button v-on:click="userLogout()">Logout</button>
    </header>
    <nuxt/>
    <footer></footer>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {}
  },

  methods: {
    async userLogout() {
      console.log('Logging out');
      await this.$auth.logout('local');
      await this.$router.push('/login');
    }
  }
}
</script>
