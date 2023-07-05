<template>
  <section class="places">
    <SectionHeaderComponent
      :sectionContent='{ title: "Let’s go places together",subtitle: "Discover the latest offers and news and start planning your next trip with us.",textBtn: "See All",subtitleColor: "subtitle-color" }' />
    <div class="places__bg"></div>
  </section>
</template>

<script>
import SectionHeaderComponent from '@/components/SectionHeaderComponent'
export default {
  name: 'GoTogetherComponent',
  components: {
    SectionHeaderComponent,
  }
}
</script>

<style lang='scss' scoped>
.places {
  padding: 80px 0;

  &__bg {
    width: 100%;
    height: 486px;
    margin-top: 24px;
    background-image: url('@/assets/image/photo/bg-flight-place.svg');
    background-repeat: no-repeat;
    background-size: cover;

  }
}
</style>