<template>
  <form>
    <h1>Sign in</h1>
    <section>
      <label for="user_id">USER ID</label>
      <input id="user_id" name="user_id" type="text" autocomplete="username" required autofocus
             v-model="user_id"
      >
    </section>
    <button id="log-in" @click="handle_log_in">Log in</button>
  </form>
</template>

<script>
export default {
  name: "login",

  data: () => {
    return {
      user_id: undefined
    }
  },

  methods: {
    handle_log_in(e) {
      e.preventDefault();

      fetch(`http://localhost:3001/api/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            user_id: this.user_id
          })
        }).then(() => {
        this.$auth.$storage.setUniversal('user_id', this.user_id);
        this.$router.push({name: 'index'});
      }).catch((e) => {
        console.error(e);
      })

    }
  }
}
</script>

<style scoped>

</style>
