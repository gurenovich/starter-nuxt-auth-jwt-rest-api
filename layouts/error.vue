<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <p>
        <nuxt-link to="/">Вернуться на главную</nuxt-link>
      </p>
    </div>
  </div>
</template>

<style>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
}

.error-title {
  color: rgb(151, 5, 5);
}
</style>
