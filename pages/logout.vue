<template>
  <div>Cleaning</div>
</template>

<script>
export default {
  middleware: ['auth'],
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>

<style>
</style>
