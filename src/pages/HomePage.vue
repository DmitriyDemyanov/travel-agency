<template>
  <section class="main-page">
    <div class="welcome">
      <h2 class="welcome__subtitle secondary-font fz-accent-45">Helping Others</h2>
      <h1 class="welcome__title secondary-font">Live & Travel</h1>
      <p class="welcome__text fz-20">Special offers to suit your plan</p>
      <QuickOrderComponent />
    </div>
    <PlacesComponent />
    <LandingNavigationComponent />
    <ReviewsComponent />
  </section>
</template>

<script>
import QuickOrderComponent from '@/components/QuickOrderComponent';
import PlacesComponent from '@/components/PlacesComponent';
import LandingNavigationComponent from '@/components/LandingNavigationComponent';

import ReviewsComponent from '@/components/ReviewsComponent';
import { mapActions } from 'vuex';

export default {
  name: 'HomePage',
  components: {
    QuickOrderComponent,
    PlacesComponent,
    LandingNavigationComponent,
    ReviewsComponent,
  },
  methods: {
    ...mapActions('globalContent',['fetchLandingNavigation','fetchPlaces','fetchReviews'])
  },
  mounted() {
    this.fetchLandingNavigation();
    this.fetchPlaces();
    this.fetchReviews();
  }

}
</script>

<style lang='scss' scoped>
.main-page {
  padding: var(--main-block-padding);
}

.welcome {
  padding: 24px 32px 0 32px;
  margin-bottom: 183px;
  width: 100%;
  height: 620px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url('@/assets/image/photo/bg-home-header.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 60%;
  border-radius: 24px;
  color: #fff;
  position: relative;

  &__title {
    margin-top: 4px;
    font-weight: 700;
    font-size: 80px;
    line-height: 101px;
    text-align: center;
    text-transform: uppercase;
  }

  &__subtitle {
    margin-top: 84px;
    text-align: center;
    line-height: 57px;
    font-weight: 700;
  }

  &__text {
    margin-top: 16px;

    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
}
</style>
