<template>
  <div>
    {{ text }}
    {{ like }}
  </div>
</template>

<script>
export default {
  name: "murmur",
  props: ["text", "like"]
}
</script>

<style scoped>

</style>
