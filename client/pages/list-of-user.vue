<template>
  <div>
    <h1>List of Users</h1>
    <ol id="example-1">
      <li v-for="user in users" v-if="user.id!==$auth.user.id" :key="user.id">
        <user-details :user="user"/>
        <button v-on:click="follow_user(user.id)">Follow</button>
        <button v-on:click="got_user_page(user.id)">Details</button>
        <br><br>
      </li>
    </ol>
  </div>

</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "list-of-user",


  data() {
    return {
      users: [],
    }
  },

  methods: {
    update_user() {
      fetch(`http://localhost:3001/api/users`)
        .then(async (response) => {
          this.users = await response.json();
        })
        .catch((e) => {
          console.log(e);
        })
    },

    got_user_page(id) {
      this.$router.push({name: 'user-details-page', params: {user_id: id}})
    },

    follow_user(id) {
      fetch(`http://localhost:3001/api/users/follow`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            follower_id: this.$auth.user.id,
            following_id: id
          })
        })
    }
  },

  mounted() {
    this.update_user();
  }

})
</script>

<style scoped>

</style>
