<template>
  <section class="travel container-normal">
    <SectionHeaderComponent
      :sectionContent='{ title: " Fall into travel",subtitle: "Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.",textBtn: "See All",subtitleColor: "subtitle-color",subtitleWidth: "width: 91%" }' />
    <div class="travel__cards">
      <CountryItemCardComponent />
    </div>
  </section>
</template>

<script>
import SectionHeaderComponent from "@/components/SectionHeaderComponent";
import CountryItemCardComponent from "@/components/CountryItemCardComponent";
export default {
  name: 'CountriesForTravel',
  components: {
    SectionHeaderComponent,
    CountryItemCardComponent,
  },
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