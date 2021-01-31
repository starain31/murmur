<template>
  <div>
    {{ text }}
    <br/>
    -- <b>{{ author }}</b>
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
    "author"
  ]
}
</script>

<style scoped>

</style>
