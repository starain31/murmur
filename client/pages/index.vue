<template>
  <div>
    <a href="profile"><h3>Profile</h3></a>
    <a href="list-of-user"><h3>List of user</h3></a>
    <h3>Time Line</h3>
    <ul id="example-1">
      <li v-for="murmur in murmurs" :key="murmur.id">
        <murmur :murmur="murmur"/>
        <button v-on:click="increase_like(murmur.id)">Like</button>
        <br><br>
      </li>
    </ul>
    <button v-on:click="previousPage">PREVIOUS PAGE</button>
    <button v-on:click="nextPage">NEXT PAGE</button>
  </div>
</template>

<script lang="ts">
import Murmur from "~/components/murmur.vue";
import Vue from 'vue'

export default Vue.extend({
  name: 'timeline',

  meta: {
    requiresAuth: true
  },

  components: {Murmur},

  methods: {
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
          this.fetchPage(this.$auth.$storage.getUniversal('user_id') as string)
        })
        .catch((e) => {
          console.log(e);
        })
    },

    nextPage() {
      this.page += 1;
      this.fetchPage(this.$auth.$storage.getUniversal('user_id') as string);
    },

    previousPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.fetchPage(this.$auth.$storage.getUniversal('user_id') as string);
      }
    },

    fetchPage(user_id: string) {
      return fetch(`http://localhost:3001/api/murmurs?page=${this.page}&user_id=${user_id}`)
        .then(async (res) => {
          this.murmurs = await res.json();
        })
    }
  },

  data() {
    return {
      murmurs: [],
      page: 1
    }
  },

  mounted() {
    this.fetchPage(this.$auth.$storage.getUniversal('user_id') as string)
  }
})
</script>
