<template>
  <div>
    {{ text }}
    <br/>
    -- <b>{{ user }}</b>
    <br/>
    <em>{{ like }} likes</em>
  </div>
</template>

<script>
export default {
  name: "murmur",
  props: [
    "text",
    "like",
    "user"
  ]
}
</script>

<style scoped>

</style>
