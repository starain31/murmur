<template>
  <div>
    <h1>Time Line</h1>
    <ul id="example-1">
      <li v-for="murmur in murmurs" :key="murmur.id">
        <murmur :text="murmur.text" :like="murmur.like"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Murmur from "~/components/murmur.vue";
export default {
  components: {Murmur},
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
