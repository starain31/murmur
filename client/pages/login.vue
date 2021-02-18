<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>
          Username
          <input type="text" v-model="login.user_id"/>
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" v-model="login.password"/>
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      login: {
        user_id: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {data: this.login});
        await this.$router.push('/');
      } catch (err) {
        console.log(err)
      }
    }
  }
})
</script>
