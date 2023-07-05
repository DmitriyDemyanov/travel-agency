<template>
  <section class="travel container-normal">
    <SectionHeaderComponent
      :sectionContent='{ title: " Fall into travel",subtitle: "Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.",textBtn: "See All",subtitleColor: "subtitle-color",subtitleWidth: "width: 91%" }' />
    <div class="travel__cards">
      <CountryItemCardComponent v-for="(el, ind) in getCountryCards" :key='ind' :card='el' />
    </div>
  </section>
</template>

<script>
import SectionHeaderComponent from "@/components/SectionHeaderComponent";
import CountryItemCardComponent from "@/components/CountryItemCardComponent";
import { mapGetters } from 'vuex';
export default {
  name: 'CountriesForTravel',
  components: {
    SectionHeaderComponent,
    CountryItemCardComponent,
  },
  computed: {
    ...mapGetters('globalContent',['getCountryCards']),
  }
}
</script>

<style lang='scss' scoped>
.travel {
  padding: 80px 0;

  &__cards {
    padding-top: 40px;
    display: grid;
    height: 420px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 16px;
  }
}
</style>