<template>
  <section class="container-normal">
    <div class='section__wrapper d-flex justify-content-between align-items-center'>
      <div class='section__wrapper'>
        <div class='section__wrapper fz-32'>{{ sectionContent.title }}</div>
        <div class='fz-16 font-color-7'>{{ sectionContent.subtitle }}</div>
      </div>
      <MainButtonComponent :title='sectionContent.textBtn' type='bordered' :customStyle='{ height: "40px" }'
        @click='showMorePlaces' />
    </div>
  </section>
</template>

<script>
import MainButtonComponent from '@/components/MainButtonComponent';
export default {
  name: 'SectionHeaderComponent',
  components: {
    MainButtonComponent,
  },
  props: {
    sectionContent: {
      type: Object,
      required: true,
    }
  },
  methods: {
    showMorePlaces() {
      console.log('showMorePlaces!!!: ask Hennadii how get function in parent component , without state');
    }
  }
}
</script>

<style lang='scss' scoped>
.section {
  &__wrapper {
    margin-bottom: 40px;
  }

  &__title {
    margin-bottom: 16px;
    color: #000;
  }

}
</style>