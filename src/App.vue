<template>
  <BContainer>

    <div class="mb-3 mt-3">
      <router-link class="p-2" to="/">Главная</router-link>

    </div>
    <router-view class="main-view"></router-view>
  </BContainer>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "@/assets/style/index.scss";
</style>
