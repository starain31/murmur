<template>
  <form>
    <h1>Sign in</h1>
    <section>
      <label for="email">Email</label>
      <input id="email" name="email" type="text" autocomplete="username" required autofocus
             v-model="email"
      >
    </section>
    <button id="sign-in" @click="handle_sign_in">Sign in</button>
  </form>
</template>

<script>
export default {
  name: "login",

  data: () => {
    return {
      email: undefined
    }
  },

  methods: {
    handle_sign_in(e) {
      e.preventDefault();
      console.log(e)
      console.log('log in handle')
      fetch(`http://localhost:3001/api/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: this.email
          })
        }).then((response) => {
        console.log('response')
        console.log(response);
        return response.json();
      }).then((result) => {
        console.log(result)
      }).catch((e) => {
        console.error(e);
      })
    }
  }
}
</script>

<style scoped>

</style>
