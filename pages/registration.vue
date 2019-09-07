<template>
  <div>
    <h1>Registration form</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="login" placeholder="login" />
      <input type="text" v-model="password" placeholder="password" />
      <button>Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    async onSubmit() {
      const formData = {
        login: this.login,
        password: this.password
      }

      try {
        await this.$store.dispatch('auth/registration', formData)
        this.$router.push('/')
      } catch (error) {}
    }
  }
}
</script>

<style>
</style>
