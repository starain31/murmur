<template>
  <div>
    {{ murmur.text }}
    <br/>
    -- <b>{{ murmur.user.name }}</b>
    <br/>
    <em>{{ murmur.like }} likes</em>
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

  }
})
</script>

<style scoped>

</style>
