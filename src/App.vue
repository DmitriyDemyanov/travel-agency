<template>
  <section>

    <HeaderComponent />


    <!-- <router-link class="p-2" to="/">Главная</router-link>  -->


    <router-view class="main-view"></router-view>
    <FooterComponent />
  </section>
</template>

<script>


import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },

}
</script>

<style>
@import "@/assets/style/index.scss";

.container-normal {
  width: 1232px;
  margin: 0 auto;
}
</style>
