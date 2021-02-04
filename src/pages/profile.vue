<template>
  <div>
    <h1>Profile</h1>
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
import Vue from 'vue'

export default Vue.extend({
  name: "profile",

  data() {
    return {
      user: undefined,
      murmurs: [],
      new_murmur: undefined
    }
  },

  methods: {
    update_user_details(user_id) {
      fetch(`http://localhost:3001/api/profile?id=${user_id}`)
        .then(async (response) => {
          this.user = await response.json();
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
          this.update_user_details(this.$auth.$storage.getUniversal('user_id'));
          this.update_murmurs(this.$auth.$storage.getUniversal('user_id'));
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
            user: this.$auth.$storage.getUniversal('user_id')
          })
        })
        .then(async (response) => {
          console.log(await response.text());
          this.update_user_details(this.$auth.$storage.getUniversal('user_id'));
          this.update_murmurs(this.$auth.$storage.getUniversal('user_id'));
        })
        .catch((e) => {
          console.log(e);
        })
    }
  },

  mounted() {
    this.update_user_details(this.$auth.$storage.getUniversal('user_id'));
    this.update_murmurs(this.$auth.$storage.getUniversal('user_id'));
  }
})
</script>

<style scoped>

</style>
