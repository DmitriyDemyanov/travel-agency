<template>
  <section class="pages__nav container-normal">

    <PageItemNavigation v-for='(el,ind) in getRenderDataNav' :key='ind' :renderData='el' />

  </section>
</template>

<script>
import PageItemNavigation from '@/components/PageItemNavigation';

import { mapGetters } from 'vuex';

export default {
  name: 'PagesNavigationComponent',
  components: {
    PageItemNavigation,
  },
  computed: {
    ...mapGetters("globalContent",["getRenderDataNav"])
  },


}
</script>

<style lang='scss' scoped>
.pages__nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  padding-bottom: 70px;
}
</style>