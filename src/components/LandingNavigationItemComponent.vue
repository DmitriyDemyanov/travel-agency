<template>
  <section class="nav-item" :style='`background-image: url(${renderData["background-image"]})`'>
    <div class="nav-item__title secondary-font fz-40">{{ renderData.title }}</div>
    <div class="nav-item__description fz-16">{{ renderData.text }}</div>
    <MainButtonComponent color='brand' :title='renderData.title' @click='$router.push(renderData.path)'>
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
  background-size: 100% 100%;
  background-position: center;
  border-radius: 20px;
  text-align: center;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: background-size .3s ease-in-out;

  &:hover {
    background-size: 110% 110%;
    transition-duration: 3s;
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
