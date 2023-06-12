<template>
  <section>
    <HeaderComponent />
    <router-view></router-view>
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
  }
}
</script>

<style lang='scss'>
@import "@/assets/style/index.scss";
</style>
