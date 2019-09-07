<template>
  <div>
    <h1>Starter template with auth jwt rest api</h1>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  head: {
    title: `Main page | ${process.env.appName}`
  }
}
</script>

<style>
</style>
