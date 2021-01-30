<template>
  <div>
    <h1>MURMURS</h1>
    <ul id="example-1">
      <li v-for="murmur in murmurs" :key="murmur.id">
        {{ murmur.text }}
        {{ murmur.like }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $axios }): Promise<object> {
    const res = await $axios.$get('http://localhost:3001/api/murmurs')
    console.log(res)
    return {
      murmurs: res,
    }
  },
  data() {
    return {}
  },
}
</script>
