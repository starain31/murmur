<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">

      </div>
      <div class="navbar-menu">
        <div class="navbar-front">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              MENU
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/">Timeline</nuxt-link>
              <nuxt-link class="navbar-item" to="/list-of-user">List of user</nuxt-link>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable" v-if="$auth.loggedIn">
            <a class="navbar-link">
              {{ $auth.user.name }}
            </a>
            <div class="navbar-dropdown" v-if="this.$auth.loggedIn">
              <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
              <hr class="navbar-divider"/>
              <a class="navbar-item" v-on:click="userLogout()">Logout</a>
            </div>
          </div>
          <template v-if="!this.$auth.loggedIn">
            <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
            <nuxt-link class="navbar-item" to="/login">Log In</nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "navbar",

  methods: {
    async userLogout() {
      console.log('Logging out');
      await this.$auth.logout('local');
      this.$forceUpdate();
      await this.$router.push('/login');
    }
  }
})
</script>

<style scoped>

</style>
