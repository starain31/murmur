<template>
  <div>
    <ul>
      <li><b>Name: </b> {{ user.name }}</li>
      <li><b>Number of follower: </b>{{ user.number_of_followers }}</li>
      <li><b>Number of following: </b>{{ user.number_of_followings }}</li>
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

})
</script>

<style scoped>

</style>
