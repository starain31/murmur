<template>
  <div>
    <h1>Profile</h1>
    <user-details v-if="user" :user="user"/>
    <ul id="example-1">
      <li v-for="murmur in murmurs" :key="murmur.id">
        <murmur :murmur="murmur"/>
        <button v-on:click="delete_murmur(murmur.id)">DELETE</button>
        <br/>
        </br>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: "profile",

  data() {
    return {
      user: undefined,
      murmurs: []
    }
  },

  methods: {
    delete_murmur(e) {
      console.log(e);
    }
  },

  mounted() {
    fetch(`http://localhost:3001/api/profile?id=${this.$auth.$storage.getUniversal('user_id')}`)
      .then(async (response) => {
        this.user = await response.json();
      })
      .catch((e) => {
        console.log(e);
      })

    fetch(`http://localhost:3001/api/user/murmurs?id=${this.$auth.$storage.getUniversal('user_id')}`)
      .then(async (response) => {
        this.murmurs = await response.json();
      })
      .catch((e) => {
        console.log(e);
      })
  }
})
</script>

<style scoped>

</style>
