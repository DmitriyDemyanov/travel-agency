<template>
  <section>
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </section>
</template>

<script>
import { mapActions } from 'vuex';


import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: {
    ...mapActions('globalContent',['fetchFooterLinks'])
  },
  mounted() {
    this.fetchFooterLinks();
  }

}
</script>

<style lang='scss'>
@import "@/assets/style/index.scss";
</style>
