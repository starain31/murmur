<template>
  <div>
    {{ text }}
    <br/>
    -- <b>{{ user }}</b>
    <br/>
    {{ like }} likes
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
