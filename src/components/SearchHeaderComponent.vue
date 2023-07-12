<template>
  <section class="header">
    <div
      :style='`background-image: linear-gradient(90deg, rgba(0, 35, 77, 0.63) 0%, rgba(0, 35, 77, 0.00) 100%), url(${require("@/assets/image/photo/" + showBg + "-main.png")})`'
      class="header__content">
      <h2 class="header__title secondary-font fz-accent-45">{{ title }}</h2>
      <p class="fz-20">{{ subtitle }}</p>
    </div>
    <QuickOrderComponent />
  </section>
</template>

<script>
import QuickOrderComponent from '@/components/QuickOrderComponent';
export default {
  name: 'SearchHeaderComponent',
  components: {
    QuickOrderComponent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  computed: {
    showBg() {
      return this.$route.name === 'flights' ? 'bg-flight' : 'bg-hotel';
    },
  }
}
</script>

<style lang='scss' scoped>
.header {
  position: relative;
  color: #fff;
  margin-bottom: 196px;

  &__content {
    width: 100%;
    min-height: 537px;
    padding-top: 80px;
    padding-left: 126px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__title {
    width: 435px;
  }
}

.wrapper-order {
  position: absolute;
  bottom: 169px;
  right: 0;
  left: 0;
}
</style>