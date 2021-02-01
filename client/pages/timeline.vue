<template>
  <div>
    <h1>Time Line</h1>
    <ul id="example-1">
      <li v-for="murmur in murmurs" :key="murmur.id">
        <murmur :text="murmur.text" :like="murmur.like" :user="murmur.user"/>
      </li>
    </ul>
    <button v-on:click="previousPage">PREVIOUS PAGE</button>
    <button v-on:click="nextPage">NEXT PAGE</button>
  </div>
</template>

<script lang="ts">
import Murmur from "~/components/murmur.vue";
export default {
  components: {Murmur},
  methods: {
    nextPage() {
      this.page += 1;
      this.fetchPage();
    },

    previousPage() {
      if(this.page > 1) {
        this.page -= 1;
        this.fetchPage();
      }
    },

    fetchPage() {
      return fetch(`http://localhost:3001/api/murmurs?page=${this.page}`)
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
    this.fetchPage()
  }
}
</script>
