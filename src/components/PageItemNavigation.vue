<template>
  <section class="page" :style='{ BackgroundImage: `require(url(@/assets/image/photo/bg-${test.bg}.png))` }'>
    <!--не такой TradeGothic???????????-->
    <div class="page__title secondary-font fz-40">{{ test.title }}</div>
    <div class="page__description fz-16">Search Flights & Places Hire to our most popular destinations</div>
    <MainButtonComponent :title='test.textBtn' color='brand' @click='routeToFlights'>
      <template #prepend> <img src="@/assets/image/icons/paper-plane.svg" alt="icon"></template>
    </MainButtonComponent>
  </section>
</template>

<script>
import MainButtonComponent from '@/components/MainButtonComponent';
export default {
  name: 'PageItemNavigation',
  components: {
    MainButtonComponent,
  },
  props: {
    test: {
      type: Object,
      default: () => ({}),
    }
  },
  methods: {
    routeToFlights() {
      console.log('routeToFlights')
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  width: 100%;
  min-height: 560px;
  /* background-image: url('@/assets/image/photo/bg-flights.png'); */
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  text-align: center;
  padding: 372px 101px 0 114px;
  color: #fff;

  &:hover {
    transition: all 0.5s;
    scale: 1.05;
  }


  &__title {
    margin-bottom: 8px;
    font-family: 'TradeGothic LT Extended'; //?????????????????????????????? тоже не такой

  }

  &__description {
    margin-bottom: 16px;
  }
}
</style>