<template>
  <section class="wrapper-page">
    <div class="flight">
      <h2 class="flight__title secondary-font fz-accent-45">Make your travel wishlist, we’ll do the rest</h2>
      <p class="fz-20">Special offers to suit your plan</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FlightsSearchPage',
}
</script>

<style lang='scss' scoped>
.wrapper-page {
  padding-top: 90px;
  color: #fff;
}

.flight {
  width: 100%;
  min-height: 537px;
  padding-top: 80px;
  padding-left: 126px;
  background-image: linear-gradient(90deg, rgba(0, 35, 77, 0.63) 0%, rgba(0, 35, 77, 0.00) 100%), url('@/assets/image/photo/bg-flight-main.png');
  background-repeat: no-repeat;
  background-size: cover;

  &__title {
    width: 435px;
  }
}
</style>