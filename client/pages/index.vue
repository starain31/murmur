<template>
  <div>
    <a href="profile"><h1>Profile</h1></a>
    <h1>Time Line</h1>
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

export default {
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
        .then((response) => {
          this.fetchPage(this.$auth.$storage.getUniversal('user_id'))
        })
        .catch((e) => {
          console.log(e);
        })
    },

    nextPage() {
      this.page += 1;
      this.fetchPage();
    },

    previousPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.fetchPage();
      }
    },

    fetchPage(user_id) {
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
    console.log(`Mounted called`);
    this.fetchPage(this.$auth.$storage.getUniversal('user_id'))
  }
}
</script>
