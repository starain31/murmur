<template>
  <div>
    {{ text }}
    <br/>
    -- <b>{{ author }}</b>
    <br/>
    likes: {{ like }}
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
