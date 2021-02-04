<template>
  <div>
    <h1>List of Users</h1>
    <ul id="example-1">
      <li v-for="user in users" v-if="user.id!==current_user" :key="user.id" v-on:click="got_user_page(user.id)">
        <user-details :user="user"/>
        <br><br>
      </li>
    </ul>
  </div>

</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: "list-of-user",

  data() {
    return {
      users: [],
      current_user: this.$auth.$storage.getUniversal('user_id')
    }
  },

  methods: {
    update_user() {
      fetch(`http://localhost:3001/api/users?`)
        .then(async (response) => {
          this.users = await response.json();
        })
        .catch((e) => {
          console.log(e);
        })
    },

    got_user_page(id) {
      this.$router.push({name: 'user-details-page', params: {user_id: id}})
    }
  },

  mounted() {
    this.update_user();
  }

})
</script>

<style scoped>

</style>
