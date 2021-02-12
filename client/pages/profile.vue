<template>
  <div>
    <user-details v-if="user" :user="user"/>
    <ul id="example-1">
      <li v-for="murmur in murmurs" :key="murmur.id">
        <murmur :murmur="murmur"/>
        <button v-on:click="delete_murmur(murmur.id)">DELETE</button>
        <br><br>
      </li>
    </ul>
    <form>
      <label> Murmur
        <textarea v-model="new_murmur"></textarea>
      </label>
      <button v-on:click="submit_murmur">Post</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "profile",

  meta: {
    tile: 'profile'
  },

  data() {
    return {
      user: this.$auth.user,
      murmurs: [],
      new_murmur: undefined
    }
  },

  methods: {
    update_user_details(user_id) {
      fetch(`http://localhost:3001/api/profile?id=${user_id}`)
        .then(async (response) => {
          this.user = await response.json();
          console.log(this.user);
        })
        .catch((e) => {
          console.log(e);
        })
    },

    update_murmurs(user_id) {
      fetch(`http://localhost:3001/api/user/murmurs?id=${user_id}`)
        .then(async (response) => {
          this.murmurs = await response.json();
        })
        .catch((e) => {
          console.log(e);
        })
    },

    delete_murmur(murmur_id) {
      fetch(`http://localhost:3001/api/murmur/delete`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            murmur_id,
          })
        })
        .then(async (response) => {
          console.log(await response.text());
          this.update_user_details(this.$auth.user.id);
          this.update_murmurs(this.$auth.user.id);
        })
        .catch((e) => {
          console.log(e);
        })
    },

    submit_murmur() {
      fetch(`http://localhost:3001/api/murmur/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            text: this.new_murmur,
            user: this.$auth.user.id
          })
        })
        .then(async () => {
          this.update_user_details(this.$auth.user.id);
          this.update_murmurs(this.$auth.user.id);
        })
        .catch((e) => {
          console.log(e);
        })
    }
  },

  mounted() {
    this.update_user_details(this.$auth.user.id);
    this.update_murmurs(this.$auth.user.id);
  }
})
</script>

<style scoped>

</style>
