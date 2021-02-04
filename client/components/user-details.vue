<template>
  <div>
    <ul>
      <li><b>Name: </b> {{ user.name }}</li>
      <li><b>Number of follower: </b>{{ user.follow_count }}</li>
      <li><b>Number of following: </b>{{ user.followed_count }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: "user-details",

  props: [
    'user'
  ],

  mounted() {
    console.log(this.user);
  },

})
</script>

<style scoped>

</style>
