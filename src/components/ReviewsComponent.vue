<template>
  <section class="reviews-wrapper container-normal ">

    <SectionHeaderComponent
      :sectionContent='{ title: "Reviews",subtitle: "What people says about Golobe facilities",textBtn: "See All" }' />
    <div class="d-flex">
      <ReviewItemComponent />
      <ReviewItemComponent />
      <ReviewItemComponent />
    </div>
  </section>
</template>

<script>
import ReviewItemComponent from '@/components/ReviewItemComponent';
import SectionHeaderComponent from '@/components/SectionHeaderComponent';
export default {
  name: 'ReviewsComponent',
  components: {
    ReviewItemComponent,
    SectionHeaderComponent,
  }
}
</script>

<style lang='scss' scoped>
.reviews-wrapper {
  padding-top: 70px;
  padding-bottom: 90px;
}
</style>