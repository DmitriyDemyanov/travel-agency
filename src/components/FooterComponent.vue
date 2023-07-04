<template>
  <section class="footer">

    <div class="footer__content container-normal">
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
      <FooterMenuComponent :links='el' v-for="(el,ind) in getFooterLinks" :key='ind' v-show="getFooterLinks" />
      <div v-show="!getFooterLinks.length"> {{ getErrorMessage }} </div>
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
    ...mapGetters("globalContent",[
      'getSocialMedia',
      'getFooterLinks',
      'getErrorMessage',
    ])
  },
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
