<template>
  <section class="landing-nav container-normal">

    <LandingNavigationItemComponent v-for='(el,ind) in getLandingNavigations' :key='ind' :renderData='el' />

  </section>
</template>

<script>
import LandingNavigationItemComponent from '@/components/LandingNavigationItemComponent';
import { mapGetters } from 'vuex';

export default {
  name: 'LandingNavigationComponent',
  components: {
    LandingNavigationItemComponent,
  },
  computed: {
    ...mapGetters('globalContent', ['getLandingNavigations'])
  },
}
</script>

<style lang='scss' scoped>
.landing-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  padding-bottom: 70px;
}
</style>
