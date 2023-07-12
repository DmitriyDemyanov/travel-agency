<template>
  <section class="wrapper-page">
    <SearchHeaderComponent title='Make your travel wishlist, we’ll do the rest' subtitle='Special offers to suit your plan'/>  
    <GoTogetherComponent />
    <CountriesForTravelComponent />
    <TourismCityComponent />
  </section>
</template>

<script>
import SearchHeaderComponent from '@/components/SearchHeaderComponent';
import GoTogetherComponent from '@/components/GoTogetherComponent';
import CountriesForTravelComponent from '@/components/CountriesForTravelComponent';
import TourismCityComponent from "@/components/TourismCityComponent";
export default {
  name: 'FlightsSearchPage',
  components: {
    SearchHeaderComponent,
    GoTogetherComponent,
    CountriesForTravelComponent,
    TourismCityComponent,
  },

}
</script>

<style lang='scss' scoped>
.wrapper-page {
  padding-top: 90px;
}


</style>