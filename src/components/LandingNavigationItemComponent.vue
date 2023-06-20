<template>
  <section class="nav-item" :class="renderData.bg">
    <div class="nav-item__title secondary-font fz-40">{{ renderData.title }}</div>
    <div class="nav-item__description fz-16">{{ renderData.subtitle }}</div>
    <MainButtonComponent color='brand' :title='renderData.textBtn' @click='$router.push(renderData.route)'>
      <template #prepend>
        <img src="@/assets/image/icons/paper-plane.svg" alt="icon">
      </template>
    </MainButtonComponent>
  </section>
</template>

<script>
import MainButtonComponent from '@/components/MainButtonComponent';

export default {
  name: 'LandingNavigationItemComponent',
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
.nav-item {
  width: 100%;
  min-height: 560px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  text-align: center;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.3s;

  &.flights {
    background-image: url('@/assets/image/photo/bg-flights.png');
  }

  &.hotels {
    background-image: url('@/assets/image/photo/bg-hotels.png');
    transition: all 1s;
  }

  &:hover {
    background-size: 110%;

  }

  &__title {
    margin-bottom: 8px;

  }

  &__description {
    margin-bottom: 16px;
    width: 80%;
  }
}
</style>
