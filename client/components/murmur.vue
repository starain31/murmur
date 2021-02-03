<template>
  <div>
    {{ murmur.text }}
    <br/>
    -- <b>{{ murmur.user.name }}</b>
    <br/>
    <em>{{ murmur.like }} likes</em>
    <button v-on:click="increase_like">Like</button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "murmur",

  props: [
    "murmur",
  ],

  mounted() {
    console.log(this.murmur)
  },

  methods: {
    increase_like() {
      fetch(`http://localhost:3001/api/murmur/like`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            murmur_id: this.murmur.id,
            user_id: this.$auth.$storage.getUniversal('user_id')
          })
        }).then((response) => {
          if(response.status === 201)
            this.murmur.like += 1;
      }).catch((e) => {
        console.log(e);
      })
    }
  }
})
</script>

<style scoped>

</style>
