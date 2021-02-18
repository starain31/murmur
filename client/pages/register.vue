<template>
  <div>
    <form @submit.prevent="register_user">
      <div>
        <label>
          Name
          <input type="text" v-model="user.name">
        </label>
      </div>
      <div>
        <label>
          Username
          <input type="text" v-model="user.user_id"/>
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" v-model="user.password"/>
        </label>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  auth: false,

  data() {
    return {
      user: {
        name: '',
        user_id: '',
        password: ''
      }
    }
  },
  methods: {
    async register_user() {
      fetch(`http://localhost:3001/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
      }).then(async (response) => {
        console.log({status: response.status})
        if (response.status === 201) {
          console.log(`Successful`)
        } else {
          console.log(`Failed`)
        }
        const response_body = await response.json();
        console.log({response_body});
      })
    }
  }
})
</script>
