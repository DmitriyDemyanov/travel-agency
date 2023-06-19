<template>
  <section class='places container-normal'>
    <div class='places__wrapper d-flex justify-content-between align-items-center'>
      <div class='places__content'>
        <div class='places__title fz-32'>Plan your perfect trip</div>
        <div class='fz-16 font-color-7'>Search Flights & Places Hire to our most popular destinations</div>
      </div>
      <MainButtonComponent
        title='See more places'
        type='bordered'
        :customStyle='{ height: "40px" }'
        @click='showMorePlaces'
      />
    </div>
    <div class="places__cards">
      <PlaceItemComponent v-for="(item,ind) in getPlaces" :key='ind' :card='item' />
    </div>
  </section>
</template>

<script>
import MainButtonComponent from '@/components/MainButtonComponent';
import PlaceItemComponent from '@/components/PlaceItemComponent';
import { mapGetters } from 'vuex';

export default {
  name: 'PlacesComponent',
  components: {
    MainButtonComponent,
    PlaceItemComponent,
  },
  computed: {
    ...mapGetters('globalContent', ['getPlaces'])
  },
  methods: {
    showMorePlaces() {
      console.log('showMorePlaces!!!');
    }
  }
}
</script>

<style lang='scss' scoped>
.places {
  padding: 80px 0;

  &__wrapper {
    margin-bottom: 40px;
  }

  &__title {
    margin-bottom: 16px;
    color: #000;
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
}
</style>
