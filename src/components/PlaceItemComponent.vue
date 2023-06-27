<template>
  <section class='place d-flex align-items-center'>
    <div class="place__image"><img :src="require(`@/assets/image/photo/${card.img}.png`)" alt="photo"></div>
    <div class="place__content">
      <div class="place__title fz-16 font-color-7"> {{ card.city }}, {{ card.country }} </div>
      <span class='place__links fz-14'>
        <a :href="card.links.flights" target="_blank">Flights</a> •
        <a :href="card.links.hotels" target="_blank">Hotels</a> •
        <a :href="card.links.resorts" target="_blank">Resorts</a>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PlaceItemComponent',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
.place {
  background: #FFFFFF;
  box-shadow: 0 4px 16px rgba(17, 34, 17, 0.2);
  border-radius: 16px;
  padding: 16px;

  &__image {
    margin-right: 16px;
    width: 90px;
    height: 90px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  &__title {
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: capitalize;
  }

  &__links {
    a {
      margin-right: 8px;
      margin-left: 8px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
