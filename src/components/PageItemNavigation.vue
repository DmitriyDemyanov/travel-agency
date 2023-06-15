<template>
  <section class="page">
    <!--не такой TradeGothic???????????-->
    <div class="page__title secondary-font fz-40">Flights</div>
    <div class="page__description fz-16">Search Flights & Places Hire to our most popular destinations</div>
    <MainButtonComponent title='Show Flights' color='brand'>
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
}
</script>

<style lang='scss' scoped>
.page {
  width: 100%;
  min-height: 560px;
  background-image: url('@/assets/image/photo/bg-flights.png');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  text-align: center;
  padding: 372px 101px 0 114px;
  color: #fff;

  &:hover {
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