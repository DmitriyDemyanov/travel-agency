<template>
  <div class="footer__navigation">
    <div class="footer__navigation_title  title-ff fz-16">{{ links.title }}</div>
    <router-link v-for="(el,ind) in links.items" :key='ind' :to='el.path'
      class="footer__navigation_link font-color-7 fz-14"
    >
      {{ el.text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterMenuComponent',
  props: {
    links: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang='scss' scoped>
.footer__navigation {
  display: flex;
  flex-direction: column;

  &_title {
    margin-bottom: 16px;
  }

  &_link {
    padding: 6px 0;
  }
}
</style>
