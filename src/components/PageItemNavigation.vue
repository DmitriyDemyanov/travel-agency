<template>
  <section class="page" :class="renderData.bg">
    <div class="page__title secondary-font fz-40">{{ renderData.title }}</div>
    <div class="page__description fz-16">Search Flights & Places Hire to our most popular destinations</div>
    <MainButtonComponent :title='renderData.textBtn' color='brand' @click='$router.push(renderData.route)'>
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
    renderData: {
      type: Object,
      default: () => ({}),
    }
  },
}
</script>

<style lang='scss' scoped>
.page {
  width: 100%;
  min-height: 560px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  text-align: center;
  padding: 372px 101px 0 114px;
  color: #fff;

  &.flights {
    background-image: url('@/assets/image/photo/bg-flights.png');
  }
  
  &.hotels {
    background-image: url('@/assets/image/photo/bg-hotels.png');
  }

  &:hover {
    transition: all 0.5s;
    scale: 1.05;
  }


  &__title {
    margin-bottom: 8px;

  }

  &__description {
    margin-bottom: 16px;
  }
}
</style>