<template>
  <section>
    <HeaderComponent />
<!-- А зачем у router-view клас main-view? Я пока не вижу его использования, если нужно - верни.-->
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
// Перенес в index.scss
</style>
