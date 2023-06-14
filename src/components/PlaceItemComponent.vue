<template>
  <section class='place d-flex align-items-center'>
    <div class="place__image"><img src="@/assets/image/photo/istanbul.png" alt="photo"></div>
    <div class="place__content">
      <div class=" fz-16 font-color-7">Istanbul, Turkey</div>
      <span class='place__link'>
        <a href="#">Flights</a> •
        <a href="#">Hotels</a> •
        <a href="#">Resorts</a>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PlaceItemComponent'
}
</script>

<style lang='scss' scoped>
.place {
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
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

  &__link {
    margin-top: 8px;
  }
}
</style>