<template>
  <div>
    <h1>Login form</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="login" placeholder="login" />
      <input type="text" v-model="password" placeholder="password" />
      <button>Login</button>
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
        await this.$store.dispatch('auth/login', formData)
        this.$router.push('/')
      } catch (error) {}
    }
  },
  mounted() {
    const { message } = this.$route.query
    switch (message) {
      case 'login':
        console.error('You need login before')
        break

      case 'logout':
        console.info('Success logout')
        break

      case 'session':
        console.info('Session error. Please login again')
        break
    }
  }
}
</script>

<style>
</style>
