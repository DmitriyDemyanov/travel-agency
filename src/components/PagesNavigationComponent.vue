<template>
  <section class="pages__nav container-normal">
    <PageItemNavigation />
    <PageItemNavigation />
  </section>
</template>

<script>
import PageItemNavigation from '@/components/PageItemNavigation';
export default {
  name: 'PagesNavigationComponent',
  components: {
    PageItemNavigation,
  }
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