<template>
  <section>
    <!-- <router-link class="p-2" to="/">Главная</router-link>  -->


    <router-view class="main-view"></router-view>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "@/assets/style/index.scss";

.container-normal{
  width: 1232px;
  margin: 0 auto;
}
</style>
