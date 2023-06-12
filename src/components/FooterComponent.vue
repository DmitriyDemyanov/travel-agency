<template>
  <section class="footer">
    <div class="footer__content container-normal">

      <!-- Много лишних тегов и классов, убрал -->
      <div class="social">
        <a class="footer__logo" href="#">
          <img src="@/assets/image/icons/logo-dark.svg" alt="logo">
        </a>
        <div>
          <a class="social__link" :href="el.link" target="_blank" v-for="(el,ind) in getSocialMedia" :key='ind'>
            <img :src="require(`@/assets/image/icons/social-${el.icon}.svg`)" alt="icon">
          </a>
        </div>
      </div>

      <!-- Нужно сделать компонент и перебирать его. У нас 5 раз повторяется один и тот-же код. -->
      <!-- Попробуй переделать, если не будет получаться или не понимаешь как (требуется также изменить -->
      <!-- данные в store, сейчас там и линки на social и menu смешаны) - маякуй, я сделаю -->
      <!-- <div class="footer__navigation">
        <div class="footer__navigation_title title-ff fz-16">Our Destinations</div>
        <a href="#" class="footer__navigation_link font-color-7  fz-14" v-for="(el,ind) in getOurDestinations" :key='ind'>
          {{ el.title }}
        </a>
      </div> -->
      <FooterMenuComponent :links='el' v-for="(el,ind) in getFooterLink" :key='ind' />
    </div>
    <SiteSubscribeComponent />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import SiteSubscribeComponent from "./SiteSubscribeComponent";
import FooterMenuComponent from './FooterMenuComponent';
export default {
  name: "FooterComponent",
  components: {
    SiteSubscribeComponent,
    FooterMenuComponent,
  },
  computed: {
    ...mapGetters("flight",[
      'getSocialMedia',
      'getFooterLink'
    ])
  }
};
</script>

<style lang='scss' scoped>
.footer {
  position: relative;
  width: 100%;
  height: 573px;
  background: linear-gradient(to bottom, transparent, transparent 26%, var(--brand-color) 26%, var(--brand-color) 100%);
  padding-top: 370px;

  &__content {
    display: grid;
    grid-template-columns: 1fr 175px 175px 175px 175px 175px;
    column-gap: 24px;
  }

  &__logo {
    display: inline-block;
    margin-bottom: 24px;
  }

  &__navigation {
    display: flex;
    flex-direction: column;

    &_title {
      margin-bottom: 16px;
    }

    &_link {
      padding: 6px 0;
    }
  }
}

.social {
  &__link {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
