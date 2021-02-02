<template>
  <form action="#" method="post">
    <h1>Sign in</h1>
    <section>
      <label for="email">Email</label>
      <input id="email" name="email" type="email" autocomplete="username" required autofocus>
    </section>
    <section>
      <label for="current-password">Password</label>
      <input id="password" name="password" type="password" autocomplete="new-password" required>
    </section>
    <button id="sign-in">Sign in</button>
  </form>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

</style>
