<template>
  <section class='places container-normal'>
    <div class='places__wrapper d-flex justify-content-between align-items-center'>
      <div class='places__content'>
        <div class='places__title fz-32'>Plan your perfect trip</div>
        <div class='fz-16 font-color-7'>Search Flights & Places Hire to our most popular destinations</div>
      </div>
      <MainButtonComponent title='See more places' type='bordered' :customStyle='{ height: "40px" }' />
    </div>
    <div class="places__cards">
      <PlaceItemComponent />
    </div>
  </section>
</template>

<script>
import MainButtonComponent from '@/components/MainButtonComponent';
import PlaceItemComponent from '@/components/PlaceItemComponent';
export default {
  name: 'PlacesPlanComponent',
  components: {
    MainButtonComponent,
    PlaceItemComponent,
  }

}
</script>

<style lang='scss' scoped>
.places {
  padding-top: 80px;

  &__title {
    margin-bottom: 16px;
    color: #000;
  }
}
</style>