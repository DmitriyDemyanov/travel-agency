<template>
  <section class='places container-normal'>
    <div class="places__content">
      <SectionHeaderComponent
        :sectionContent='{ title: "Plan your perfect trip",subtitle: "Search Flights & Places Hire to our most popular destinations",textBtn: "See more places" }' />
    </div>
    <div class="places__cards">
      <PlaceItemComponent v-for="(item,ind) in getPlaces" :key='ind' :card='item' />
    </div>
  </section>
</template>

<script>
import PlaceItemComponent from '@/components/PlaceItemComponent';
import SectionHeaderComponent from '@/components/SectionHeaderComponent';

import { mapGetters } from 'vuex';

export default {
  name: 'PlacesComponent',
  components: {
    PlaceItemComponent,
    SectionHeaderComponent,
  },
  computed: {
    ...mapGetters('globalContent',['getPlaces'])
  },

}
</script>

<style lang='scss' scoped>
.places {
  padding: 80px 0;

  &__content {
    margin-bottom: 40px;
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
}
</style>
