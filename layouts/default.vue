<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['error']),
  watch: {
    error(value) {
      if (value.response.data.message) {
        console.error(value.response.data.message)
      }
    }
  }
}
</script>

<style>
</style>
