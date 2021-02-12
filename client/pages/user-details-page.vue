<template>
  <div>
    <h1>Profile</h1>
    <user-details v-if="user" :user="user"/>
    <h3>Murmurs</h3>
    <ul>
      <li v-for="murmur in murmurs" :key="murmur.id">
        <murmur :murmur="murmur"/>
        <button v-on:click="increase_like(murmur.id)">Like</button>
        <br><br>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "user-details-page",

  data() {
    return {
      user: undefined,
      murmurs: [],
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

    increase_like(murmur_id) {
      fetch(`http://localhost:3001/api/murmur/like`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            murmur_id,
            user_id: this.$auth.$storage.getUniversal('user_id')
          })
        })
        .then(() => {
          this.update_user_details(this.$route.params.user_id);
          this.update_murmurs(this.$route.params.user_id);
        })
        .catch((e) => {
          console.log(e);
        })
    },
  },

  mounted() {
    this.update_user_details(this.$route.params.user_id);
    this.update_murmurs(this.$route.params.user_id);
  }
})
</script>

<style scoped>

</style>
