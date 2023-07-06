<template>
  <section class="container-normal tourism">

    <SectionHeaderComponent
      :sectionContent='{ title: " Fall into travel",subtitle: "Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.",textBtn: "See All",subtitleColor: "subtitle-color",subtitleWidth: "width: 91%" }' />
    <div class="d-flex tourism__wrapper justify-content-between">
      <div class="tourism__content">
        <div class="d-flex justify-content-between">
          <div class="tourism__content_title secondary-font fz-40">Backpacking <br> Sri Lanka</div>
          <div class="tourism__content_price">
            <div class="fz-14">From</div>
            <div class="fz-20">$700</div>
          </div>
        </div>
        <p class="fz-14">Traveling is a unique experience as it's the best way to unplug from the
          pushes and pulls of
          daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we
          experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
        </p>


        <div class="test">
          <MainButtonComponent title='Book Flight' size='full' color='light' />
        </div>
      </div>
      <div class="tourism__photo">
        <img v-for="(el,ind) in getTourismPhoto" :key='ind'
          :src="require(`@/assets/image/photo/photo-tourism/picture-${el}.png`)" alt="photo">
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeaderComponent from '@/components/SectionHeaderComponent';
import MainButtonComponent from '@/components/MainButtonComponent';
import { mapGetters } from 'vuex';
export default {
  name: 'TourismCityComponent',
  components: {
    SectionHeaderComponent,
    MainButtonComponent,
  },
  computed: {
    ...mapGetters('globalContent',['getTourismPhoto'])
  }
}
</script>

<style lang='scss' scoped>
.tourism {
  padding-bottom: 120px;

  &__wrapper {
    margin-top: 24px;
  }

  &__content {
    width: 45%;
    padding: 24px;
    background-color: var(--brand-color);
    border-radius: 20px;
    display: grid; //----------------------test????????????????????????
    grid-template-rows: min-content;

    &_title {
      margin-bottom: 24px;
    }



    &_price {
      height: max-content;
      padding: 8px;
      background-color: #fff;
      border-radius: 8px;
      text-align: center;
    }
  }

  &__photo {
    width: calc(55% - 24px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 20px;

    img {
      width: 318px;
      height: 200px;
      border-radius: 12px;
      border: 2px solid var(--brand-color);
      object-fit: cover;
    }
  }
}

.test {
  margin-top: auto;
}
</style>