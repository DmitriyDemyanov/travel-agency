<template>
  <section class="reviews-wrapper container-normal ">

    <SectionHeaderComponent
      :sectionContent='{ title: "Reviews",subtitle: "What people says about Globe facilities",textBtn: "See All" }' />
    <div class="d-flex">
      <ReviewItemComponent v-for='(el,ind) in getReviewsItems' :key='ind' :card='el' />
    </div>
  </section>
</template>

<script>
import ReviewItemComponent from '@/components/ReviewItemComponent';
import SectionHeaderComponent from '@/components/SectionHeaderComponent';
import { mapGetters } from 'vuex';
export default {
  name: 'ReviewsComponent',
  components: {
    ReviewItemComponent,
    SectionHeaderComponent,
  },
  computed: {
    ...mapGetters('globalContent',['getReviewsItems']),
  },
}
</script>

<style lang='scss' scoped>
.reviews-wrapper {
  padding-top: 70px;
  padding-bottom: 90px;
}


</style>