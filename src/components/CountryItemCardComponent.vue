<template>
  <section :style='`background-image: url (../assets/image/photo/photo-countries/paris.png)`' class="card">
    <div class="card__content d-flex align-items-end justify-content-between">
      <div>
        <div class="fz-24">{{ card.title }}</div>
        <div class="card__subtitle fz-14">{{ card.subtitle }}</div>
      </div>
      <div class="fz-24">{{ card.currency }} {{ card.price }}</div>
    </div>
    <MainButtonComponent title='Book Flight' color='brand' @click="methodsTest(card.title)" />
  </section>
</template>

<script>
import MainButtonComponent from '@/components/MainButtonComponent'
export default {
  name: 'CountryItemCardComponent',
  components: {
    MainButtonComponent
  },
  props: {
    card: {
      type: Object,
      require: true,
    }
  },
  methods: {
    methodsTest(path) {
      console.log(path);
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  padding: 0 24px 24px 24px;
  background-image: url('@/assets/image/photo/photo-countries/london.png');
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &__content {
    margin-bottom: 16px;
  }

  &__subtitle {
    font-weight: 400;
  }
}
</style>