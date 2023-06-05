<template>
  <section>
    <div class="wrapper-header" >
      <HeaderComponent />
    </div>

    <!-- <router-link class="p-2" to="/">Главная</router-link>  -->


    <router-view class="main-view"></router-view>
    <div class="test-footer"></div>
  </section>
</template>

<script>


import HeaderComponent from '@/components/HeaderComponent';
export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  
}
</script>

<style>
@import "@/assets/style/index.scss";

.container-normal {
  width: 1232px;
  margin: 0 auto;
}

.test-footer {
  height: 500px;
}
</style>
